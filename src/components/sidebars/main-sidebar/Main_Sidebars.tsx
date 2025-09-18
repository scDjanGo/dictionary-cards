"use client";

import Link from "next/link";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSidebarsStore } from "@/lib/zustand/sidebarsStore/useSidebarsStore";
import Theme_Button from "./Theme_Button";
import { useEffect } from "react";

const LINKS = [
  { id: 1, link: "/categories", name: "Главная" },
  { id: 2, link: "/my-cards", name: "Мои карточки" },
  { id: 3, link: "/create-card", name: "Создать карточку" },
  { id: 4, link: "/create-category", name: "Создать категорию" },
  { id: 5, link: "/blocked-cards", name: "Заблокированные" },
];

export default function Main_Sidebar() {
  const isOpen = useSidebarsStore((state) => state.sidebarsStore.state);
  const offSidebarStore = useSidebarsStore((state) => state.offSidebarStore);

  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");
    return () => document.body.classList.remove("overflow-y-hidden");
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed z-[99] inset-0 bg-black/50 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => offSidebarStore()}
      ></div>

      <div
        className={`fixed z-[100] top-0 right-0 h-full bg-blueCl dark:bg-bgDark text-white shadow-lg transition-transform duration-300`}
        style={{
          width: 250,
          transform: isOpen ? "translateX(0)" : `translateX(${250}px)`,
        }}
      >
        <div className="w-full flex items-center justify-between px-[24px] my-[24px]">
          <Theme_Button />
          <div className="flex justify-end ">
            <IconButton
              onClick={() => offSidebarStore()}
              className="text-white"
            >
              <CloseIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </div>
        </div>
        <nav className="flex flex-col space-y-4 px-6 text-lg font-medium">
          {LINKS.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-white hover:underline"
              onClick={() => offSidebarStore()}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
