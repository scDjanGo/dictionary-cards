"use client";

import { Grid, List } from "lucide-react";
import { useTypeOfCards } from "@/lib/zustand";
import { typeViewCards } from "@/lib/types/types";

export default function Type_Of_Cards_Button() {
  const typeOfCards = useTypeOfCards((state) => state.value);
  const setTypeOfCards = useTypeOfCards((state) => state.setTypeOfCard);

  const handleSelect = (type: typeViewCards) => {
    setTypeOfCards(type)
    localStorage.setItem("type-of-cards", type)
  };

  return (
    <div className="flex items-center gap-3  px-[24px] mt-[24px]">
      <button
        onClick={() => handleSelect("card")}
        className={`p-2 rounded-full transition ${
          typeOfCards === "card"
            ? "bg-bgLight text-blueCl dark:text-bgItem"
            : "bg-blueCl text-bgLight dark:text-bgLight dark:bg-bgItem"
        }`}
      >
        <Grid size={20} />
      </button>

      <button
        onClick={() => handleSelect("table")}
        className={`p-2 rounded-full transition ${
          typeOfCards === "table"
            ? "bg-bgLight text-blueCl dark:text-bgItem"
            : "bg-blueCl text-bgLight dark:text-bgLight dark:bg-bgItem"
        }`}
      >
        <List size={20} />
      </button>
    </div>
  );
}
