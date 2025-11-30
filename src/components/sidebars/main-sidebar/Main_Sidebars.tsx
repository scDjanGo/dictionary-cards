"use client";

import { useEffect } from "react";
import { useSidebarsStore } from "@/lib/zustand/sidebarsStore/useSidebarsStore";
import Theme_Button from "./Theme_Button";
import Type_Of_Cards_Button from "./Type_Of_Cards_Button";
import Sidebar_Nav_Button from "./Sidebar_Nav_Button";
import { PAGES_LINKS } from "@/data/pages-links";

// Иконка крестика (SVG) вместо MUI CloseIcon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Main_Sidebar() {
  const isOpen = useSidebarsStore((state) => state.sidebarsStore.state);
  const offSidebarStore = useSidebarsStore((state) => state.offSidebarStore);

  // Блокируем скролл body при открытом сайдбаре
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => document.body.classList.remove("overflow-y-hidden");
  }, [isOpen]);

  const handleOffSidebarStore = () => {
    offSidebarStore();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[1000] ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOffSidebarStore}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-blueCl dark:bg-bgDark text-white shadow-2xl transition-transform duration-300 ease-in-out z-[1001] overflow-y-auto scrollbar-hide`}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header: Theme + Close */}
        <div className="flex items-center justify-between px-6 py-6">
          <Theme_Button />
          <button
            onClick={handleOffSidebarStore}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Закрыть боковое меню"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 px-6 text-lg font-medium">
          {PAGES_LINKS.map((item) => (
            <Sidebar_Nav_Button key={item.id} navItem={item} />
          ))}
        </nav>

        {/* Нижняя кнопка (тип карточек) */}
        <div className="mt-8 px-6">
          <Type_Of_Cards_Button />
        </div>
      </aside>

      {/* Скрываем скроллбар, но оставляем функциональность прокрутки */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
