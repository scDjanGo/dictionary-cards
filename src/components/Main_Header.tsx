"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Main_Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Логотип */}
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-2xl font-bold text-[#1976D2] hover:underline cursor-pointer"
        >
          <ArrowBackIcon />
          <span>Назад</span>
        </button>

        {/* Mobile menu icon */}
        <IconButton
          onClick={() => setOpen(true)}
          className="md:hidden text-[#1976D2]"
        >
          <MenuIcon sx={{ color: "#1976D2" }} />
        </IconButton>

        {/* Drawer меню */}
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#1976D2",
              color: "white",
              width: 250,
              borderLeft: "4px solid white",
            },
          }}
        >
          <div className="flex justify-end p-4">
            <IconButton onClick={() => setOpen(false)} className="text-white">
              <CloseIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </div>
          <nav className="flex flex-col space-y-4 px-6 text-lg font-medium">
            <Link
              href="/"
              className="text-white hover:underline"
              onClick={() => setOpen(false)}
            >
              Главная
            </Link>
            <Link
              href="/my-cards"
              className="text-white hover:underline"
              onClick={() => setOpen(false)}
            >
              Мои карточки
            </Link>
            <Link
              href="/create-card"
              className="text-white hover:underline"
              onClick={() => setOpen(false)}
            >
              Создать карточку
            </Link>
            <Link
              href="/create-category"
              className="text-white hover:underline"
              onClick={() => setOpen(false)}
            >
              Создать категорию
            </Link>
          </nav>
        </Drawer>
      </div>
    </header>
  );
}
