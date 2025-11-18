"use client";

import { useChangeThemeStore } from "@/lib/zustand/chageThemeStore/useChangeThemeStore";
import { Moon, Sun } from "lucide-react";

export default function Theme_Button() {
  const darkTheme = useChangeThemeStore((state) => state.theme);
  const setTheme = useChangeThemeStore((state) => state.setTheme);

  const toggleTheme = () => {
    if (darkTheme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-md transition hover:bg-black/10 dark:hover:bg-white/10"
      title={darkTheme ? "Светлая тема" : "Тёмная тема"}
    >
      {darkTheme ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}
