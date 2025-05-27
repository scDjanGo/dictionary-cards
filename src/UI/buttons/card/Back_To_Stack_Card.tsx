"use client";

import { removeCardFromState } from "@/lib/redux/slices/currentCardsSlice/currentCardsSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { CardType } from "@/lib/types/types";
import { useState } from "react";

type ButtonProps = {
  card: CardType;
};

export default function Back_To_Stack_Card({ card }: ButtonProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setOpen(false);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cardsFromBasket: CardType[] = JSON.parse(
      localStorage.getItem("basket-cards") || "[]"
    );

    localStorage.setItem(
      "basket-cards",
      JSON.stringify([...cardsFromBasket.filter((item) => item.id !== card.id)])
    );
    dispatch(removeCardFromState(card.id));
    setOpen(false);
  };

  return (
    <>
      <span
        onClick={handleOpen}
        className="text-center duration-300 ease-in-out transition-all w-full p-[4px] text-[12px] font-bold text-blueCl bg-white/30 cursor-pointer hover:bg-blueCl hover:text-white"
      >
        Вернуть
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
            <p className="mb-6 text-sm text-gray-700">Вернуть карточку?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Нет
              </button>
              <button
                onClick={handleBack}
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
