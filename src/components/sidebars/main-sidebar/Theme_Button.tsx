"use client";

import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useChangeThemeStore } from "@/lib/zustand/chageThemeStore/useChangeThemeStore";

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
    <Tooltip title={darkTheme ? "Светлая тема" : "Тёмная тема"}>
      <IconButton
        onClick={toggleTheme}
        size="small"
        color="inherit"
        sx={{
          maxWidth: "24px",
          p: 0.5,
        }}
      >
        {darkTheme ? (
          <Brightness7 fontSize="small" />
        ) : (
          <Brightness4 fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
}
