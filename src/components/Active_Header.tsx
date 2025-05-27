"use client";

import { useEffect, useRef, useState } from "react";
import { PlayArrow, Search, Quiz } from "@mui/icons-material";
import { CardType } from "@/lib/types/types";
import { useCurrentCardsStore } from "@/lib/zustand/useCurrentCardsStore";
import { useRouter } from "next/navigation";

export default function Active_Header({
  currentCards,
}: {
  currentCards: CardType[];
}) {
  const router = useRouter()
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
    const filterCards = currentCards.filter(
      (item) =>
        item.name.includes(newValue) ||
        item.intlName.includes(newValue) ||
        item.description.includes(newValue) ||
        item.intlDescription.includes(newValue)
    );

    setCurrentCards(filterCards);
  };

  const handlePlayClick = () => {
    sessionStorage.setItem("quiz-cards", JSON.stringify(currentCards))
    router.push(`/quiz`)
  };

  const handleSearchIconClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      inputRef.current?.blur();
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 max-w-full mx-auto mt-[12px] mb-[12px]">
      {/* Комбинированная строка с input и кнопкой Play */}
      <div className="flex items-center w-full gap-2">
        {/* Поле ввода с иконкой поиска */}
        <div className="flex items-center flex-1 border border-[#1976D2] rounded-md overflow-hidden shadow-sm">
          <button
            onClick={handleSearchIconClick}
            className="p-2 text-[#1976D2] hover:bg-[#1976D220] transition"
          >
            <Search />
          </button>
          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Введите запрос..."
            className="flex-1 px-3 py-2 outline-none text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Кнопка Play с иконкой Quiz */}
        <button
          onClick={handlePlayClick}
          className="flex items-center gap-2 bg-[#1976D2] hover:bg-[#155a9c] text-white font-medium px-4 py-2 rounded-md transition duration-200 shadow cursor-pointer"
          title="Запустить тест"
        >
          <Quiz />
          <PlayArrow fontSize="small" />
        </button>
      </div>
    </div>
  );
}
