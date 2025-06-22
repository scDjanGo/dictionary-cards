"use client";

import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { typeSidebars, typeUiModals } from "@/lib/types/types";
import { useUiModalsStore } from "@/lib/zustand/uiModals/useUiModals";
import { useSidebarsStore } from "@/lib/zustand/sidebarsStore/useSidebarsStore";
import Category_Name from "@/UI/buttons/header/Category_Name";

export default function Main_Header() {
  const router = useRouter();
  const pathname = usePathname();
  const uiModals = useUiModalsStore((state) => state);
  const sidebarsStore = useSidebarsStore((state) => state);
  const [canGoBack, setCanGoBack] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const my_categories: any[] = JSON.parse(
      localStorage.getItem(`my-categories`) || "[]"
    );

    if (!my_categories || !my_categories.length) {
      const newCategory = {
        id: 0,
        name: "Others",
        intlName: "Другие",
        createDate: Date.now(),
      };
      console.log("ok");

      localStorage.setItem("my-categories", JSON.stringify([newCategory]));
      return;
    }
  }, []);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

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
      router.push("/categories");
    }
  };

  const handleTurnModal = (modal?: typeUiModals["value"]) => {
    modal ? uiModals.setUiModalsStore(modal) : uiModals.offUiModalsStore();
  };

  const handleTurnSidebar = (sidebar: typeSidebars["value"]) => {
    sidebar
      ? sidebarsStore.setSidebarStore(sidebar)
      : sidebarsStore.offSidebarStore();
  };

  return (
    <header
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <div className={`flex items-center gap-[12px]`}>
          <button
            onClick={handleBack}
            className={`flex items-center space-x-2 text-2xl font-bold text-[#1976D2] hover:underline cursor-pointer ${
              (pathname === "/" || pathname === "/categories") && "opacity-0"
            }`}
          >
            <ArrowBackIcon />
            {/* <span className={``}>Назад</span> */}
          </button>
          <Category_Name />
        </div>

        {/* Mobile menu icon */}
        <div className={`flex items-center gap-[12px]`}>
          <IconButton
            onClick={() => handleTurnModal("save-cards")}
            className={`hidden text-blueCl translate-y-[-1.5px]`}
            style={{
              backgroundColor: "white",
              display: pathname?.includes("my-cards") ? "block" : "none",
            }}
          >
            <CloudUploadIcon sx={{ color: "#1976D2" }} />
          </IconButton>

          <IconButton
            onClick={() => handleTurnSidebar("main-sidebar")}
            className="md:hidden text-blueCl"
          >
            <MenuIcon sx={{ color: "#1976D2" }} />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
