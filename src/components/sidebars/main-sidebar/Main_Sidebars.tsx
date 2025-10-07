"use client";

import Link from "next/link";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSidebarsStore } from "@/lib/zustand/sidebarsStore/useSidebarsStore";
import Theme_Button from "./Theme_Button";
import { useEffect } from "react";
import Type_Of_Cards_Button from "./Type_Of_Cards_Button";
import Sidebar_Nav_Button from "./Sidebar_Nav_Button";
import { typeSidebarLink } from "@/lib/types/types";

const LINKS: typeSidebarLink[] = [
  { id: 1, link: "/", name: "Главная", childItems: [] },
  {
    id: 2,
    link: "/cards",
    name: "Карточки",
    childItems: [
      { id: 1, link: "/my-cards", name: "Мои карточки", childItems: [] },
      { id: 2, link: "/create-card", name: "Создать карточку", childItems: [] },
      {
        id: 3,
        link: "/create-category",
        name: "Создать категорию",
        childItems: [],
      },
      {
        id: 4,
        link: "/blocked-cards",
        name: "Заблокированные",
        childItems: [],
      },
    ],
  },
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
        className={`fixed z-[1000] inset-0 bg-black/50 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => offSidebarStore()}
      ></div>

      <div
        className={`fixed z-[1001] top-0 right-0 h-full bg-blueCl dark:bg-bgDark text-white shadow-lg transition-transform duration-300`}
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
          {LINKS.map((item, index) => (
            <Sidebar_Nav_Button key={item.id + index} navItem={item} />
          ))}
        </nav>

        <Type_Of_Cards_Button />

        <Link
          href={`https://t.me/scDjanG0?text=У меня есть предложение насчёт U-Card`}
          className={`absolute bottom-[10px] right-[10px]`}
        >
          Оставить отзыв
        </Link>
      </div>
    </>
  );
}
