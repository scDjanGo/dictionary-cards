"use client";

import { useEffect, useRef, useState } from "react";
import { Play,  Puzzle  } from "lucide-react";
import { CardType } from "@/lib/types/types";
import { useRouter } from "next/navigation";
import Search_SVG from "@/UI/svgs/Search_SVG";
import { useCurrentCardsStore } from "@/lib/zustand";

export default function Active_Header({
  currentCards,
}: {
  currentCards: CardType[];
}) {
  const router = useRouter();
  const [defaultCards, setDefaultCards] = useState<CardType[]>([]);
  const setCurrentCards = useCurrentCardsStore(
    (state) => state.setCurrentCards
  );

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDefaultCards(currentCards);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (!newValue) {
      setCurrentCards(defaultCards);
      return;
    }

    const lower = newValue.toLowerCase();
    const filtered = currentCards.filter(
      (item) =>
        item.name.toLowerCase().includes(lower) ||
        item.intlName.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.intlDescription.toLowerCase().includes(lower)
    );

    setCurrentCards(filtered);
  };

  const handlePlayClick = () => {
    sessionStorage.setItem("quiz-cards", JSON.stringify(currentCards));
    router.push(`/quiz`);
  };

  const handleSearchIconClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") inputRef.current?.blur();
  };

  return (
    <div className="flex flex-col items-center gap-6 max-w-full mx-auto mt-[12px] mb-[12px]">
      {/* Комбинированная строка */}
      <div className="flex items-center w-full gap-2">
        {/* Поле ввода */}
        <div className="flex items-center flex-1 border border-blueCl dark:border-bgLight rounded-md overflow-hidden shadow-sm dark:bg-bgItem">
          <button
            onClick={handleSearchIconClick}
            className="p-2 text-[#1976D2] hover:bg-[#1976D220] transition"
          >
            <Search_SVG />
          </button>

          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Введите запрос..."
            className="flex-1 px-3 py-2 outline-none text-gray-800 dark:text-bgLight placeholder-gray-400"
          />
        </div>

        {/* Кнопка запуска теста */}
        <button
          onClick={handlePlayClick}
          className="flex items-center gap-2 h-10 bg-blueCl dark:bg-bgItem dark:border-bgLight dark:border-[1px] hover:bg-[#155a9c] dark:hover:bg-bgDark text-white font-medium px-4 py-2 rounded-md transition duration-200 shadow cursor-pointer"
          title="Запустить тест"
        >
          <Puzzle size={18} />
          <Play size={18} />
        </button>
      </div>
    </div>
  );
}
