"use client";

import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSidebarsStore } from "@/lib/zustand/sidebarsStore/useSidebarsStore";

export default function Main_Sidebar() {
  const isOpen = useSidebarsStore((state) => state.sidebarsStore.state);
  const offSidebarStore = useSidebarsStore((state) => state.offSidebarStore);

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={() => offSidebarStore()}
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
        <IconButton onClick={() => offSidebarStore()} className="text-white">
          <CloseIcon sx={{ color: "#ffffff" }} />
        </IconButton>
      </div>
      <nav className="flex flex-col space-y-4 px-6 text-lg font-medium">
        <Link
          href="/categories"
          className="text-white hover:underline"
          onClick={() => offSidebarStore()}
        >
          Главная
        </Link>
        <Link
          href="/my-cards"
          className="text-white hover:underline"
          onClick={() => offSidebarStore()}
        >
          Мои карточки
        </Link>
        <Link
          href="/create-card"
          className="text-white hover:underline"
          onClick={() => offSidebarStore()}
        >
          Создать карточку
        </Link>
        <Link
          href="/create-category"
          className="text-white hover:underline"
          onClick={() => offSidebarStore()}
        >
          Создать категорию
        </Link>
        <Link
          href="/blocked-cards"
          className="text-white hover:underline"
          onClick={() => offSidebarStore()}
        >
          Заблокированные
        </Link>
      </nav>
    </Drawer>
  );
}
