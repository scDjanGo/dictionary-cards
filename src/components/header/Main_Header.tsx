"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { typeUiModals } from "@/lib/types/types";
import { useUiModalsStore } from "@/lib/zustand/uiModals/useUiModals";
import Category_Name from "@/UI/buttons/header/Category_Name";
import Burger_Menu from "./Burger_Menu";
import Cloud_Upload_SVG from "@/UI/svgs/Cloud_Upload_SVG";
import Arrow_Button_SVG from "@/UI/svgs/Arrow_Button_SVG";

export default function Main_Header() {
  const router = useRouter();
  const pathname = usePathname();
  const uiModals = useUiModalsStore((state) => state);
  const [canGoBack, setCanGoBack] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Скролл вниз — скрываем
      } else {
        setShowHeader(true); // Скролл вверх — показываем
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/cards");
    }
  };

  const handleTurnModal = (modal?: typeUiModals["value"]) => {
    modal ? uiModals.setUiModalsStore(modal) : uiModals.offUiModalsStore();
  };

  return (
    <header
      className={`bg-bgLight dark:bg-bgDark shadow-md  border-b-[1px] border-blueCl dark:border-bgLight fixed top-0 left-0 w-full z-50 transition-transform duration-300 pt-[3px] ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-bgLight dark:bg-bgDark  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <div className={`flex items-center gap-[12px]`}>
          <button
            onClick={handleBack}
            className={`flex items-center space-x-2 text-2xl font-bold text-[#1976D2] hover:underline cursor-pointer ${
              (pathname === "/") && "opacity-0"
            }`}
          >
            <Arrow_Button_SVG className="min-w-[38px] min-h-[38px]" />
          </button>
          <Category_Name />
        </div>

        <h1 className={`text-2xl font-bold text-blueCl dark:text-bgLight ${pathname !== "/" ? "hidden" :  ""}`}>
          Главная страница
        </h1>

        {/* Mobile menu icon */}
        <div className={`flex items-center gap-[18px]`}>
          <button
            onClick={() => handleTurnModal("save-cards")}
            className="dark:bg-bgDark"
            style={{
              backgroundColor: "white",
              display: GetCurrentPage(pathname) ? "block" : "none",
            }}
          >
            <Cloud_Upload_SVG />
          </button>

          <Burger_Menu />
        </div>
      </div>
    </header>
  );
}

function GetCurrentPage(pathname: string): boolean {
  let res =
    pathname.includes("my-cards") ||
    (pathname.includes("categories") &&
      (pathname.match(/\//g)?.length ?? 0) === 3);

  return res;
}
