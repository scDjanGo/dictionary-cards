"use client";

import { useState } from "react";
import { CardType } from "@/lib/types/types";
import { useCurrentCardsStore } from "@/lib/zustand/useCurrentCardsStore";

type ButtonProps = {
  id: number;
};

export default function Delete_My_Card({ id }: ButtonProps) {
  const [open, setOpen] = useState(false);
  const removeCardFromState = useCurrentCardsStore(
    (state) => state.removeCardFromState
  );

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setOpen(false);
  };

  const handleBlock = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
    const myCards: CardType[] = JSON.parse(
      localStorage.getItem(`my-cards`) || "[]"
    );
    const basketCards: CardType[] = JSON.parse(
      localStorage.getItem(`basket-cards`) || "[]"
    );

    localStorage.setItem(
      `my-cards`,
      JSON.stringify(myCards.filter((item) => item.id !== id))
    );
    localStorage.setItem(
      `basket-cards`,
      JSON.stringify(basketCards.filter((item) => item.id !== id))
    );
    removeCardFromState(id);
  };

  return (
    <>
      <span
        onClick={handleOpen}
        className="text-center duration-300 ease-in-out transition-all w-full p-[4px] text-[12px] font-bold text-red-600 bg-white/30 cursor-pointer hover:bg-red-600 hover:text-white"
      >
        Удалить
      </span>

      {open && (
        <div
          className="fixed inset-0 w-full z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg p-[6px_36px] max-w-[90%] w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Подтверждение</h2>
            <p className="mb-6 text-sm text-gray-700">
              Вы уверены, что хотите <strong>удалить</strong> эту карточку?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Нет
              </button>
              <button
                onClick={handleBlock}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded cursor-pointer"
              >
                Да
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
