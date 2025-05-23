"use client";

import { useDropdown } from "@/features/hooks/useDropdown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

type CardData = {
  id: number;
  catId: number;
  name: string;
  intlName: string;
  description: string;
  intlDescription: string;
  inBasket: boolean;
  isUserCard: boolean;
};

export default function User_Card({ data }: { data: CardData }) {
  const { isOpen, toggle, dropdownRef } = useDropdown();

  return (
    <div
      ref={dropdownRef}
      className="relative p-4 border border-blue-200 rounded-md shadow-md bg-white hover:shadow-lg transition-all duration-200 w-full max-w-xs"
    >
      {/* Меню кнопка */}
      <div className="absolute top-2 right-2 z-10">
        <IconButton onClick={toggle} size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>

        {isOpen && (
          <div className="absolute right-0 mt-1 w-32 bg-white rounded shadow-md border border-gray-200 z-20">
            <button
              className="w-full px-3 py-2 text-sm text-red-600 hover:bg-red-100 text-left"
              onClick={(e) => {
                e.stopPropagation();
                // действие: заблокировать
              }}
            >
              Заблокировать
            </button>
            <button
              className="w-full px-3 py-2 text-sm text-blue-600 hover:bg-blue-100 text-left"
              onClick={(e) => {
                e.stopPropagation();
                // действие: свернуть
              }}
            >
              Свернуть
            </button>
          </div>
        )}
      </div>

      {/* Контент карточки */}
      <div className="flex flex-col items-center">
        <h5 className="text-lg font-bold text-blue-700">{data.name}</h5>
        <h6 className="text-sm font-medium text-blue-500">{data.intlName}</h6>
        <div className="w-full border-t border-indigo-200 my-2" />
        <p className="text-sm text-indigo-600">{data.description}</p>
        <div className="w-full border-t border-indigo-200 my-2" />
        <p className="text-sm text-indigo-600">{data.intlDescription}</p>
      </div>
    </div>
  );
}
