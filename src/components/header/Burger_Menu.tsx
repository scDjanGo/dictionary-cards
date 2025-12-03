"use client";

import { typeSidebars } from "@/lib/types/types";
import { useChangeThemeStore } from "@/lib/zustand/chageThemeStore/useChangeThemeStore";
import { useSidebarsStore } from "@/lib/zustand/sidebarsStore/useSidebarsStore";
import { useEffect } from "react";

export default function Burger_Menu() {
  const sidebarsStore = useSidebarsStore((state) => state);
  const setTheme = useChangeThemeStore((state) => state.setTheme);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setTheme(true);
    }
  }, []);

  const handleTurnSidebar = (sidebar: typeSidebars["value"]) => {
    sidebar
      ? sidebarsStore.setSidebarStore(sidebar)
      : sidebarsStore.offSidebarStore();
  };
  return (
    <button onClick={() => handleTurnSidebar("main-sidebar")} className={``}>
      <div className="min-w-[17px] h-[2px] min-h-[2px] bg-blueCl dark:bg-bgLight rounded-[4px]" />
      <div className="min-w-[17px] h-[2px] min-h-[2px] bg-blueCl dark:bg-bgLight my-[2.8px] rounded-[4px]" />
      <div className="min-w-[17px] h-[2px] min-h-[2px] bg-blueCl dark:bg-bgLight rounded-[4px]" />
    </button>
  );
}
