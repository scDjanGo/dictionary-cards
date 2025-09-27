"use client";

import { useState, useEffect } from "react";
import { CardType } from "@/lib/types/types";
import { RotateCcw, CheckCircle, Trophy, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";

const PRIMARY_COLOR = "text-blue-700";
const PRIMARY_LIGHT = "bg-blue-50";
const PRIMARY_BACK = "bg-blue-100";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Play_Quiz_Swipe_Type({
  cards,
  random,
  errors,
  setErrors,
}: {
  cards: CardType[];
  random: boolean;
  errors: { count: number; cards: CardType[] };
  setErrors: React.Dispatch<
    React.SetStateAction<{ count: number; cards: CardType[] }>
  >;
}) {
  const [cardDeck, setCardDeck] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState(false);
  const quizSettings = useQuizSettingsStore((state) => state.quizSettingsStore);
  const router = useRouter();

  useEffect(() => {
    setCardDeck(random ? shuffleArray(cards) : [...cards]);
  }, [cards, random]);

  const handleFlip = () => setFlipped(true);

  const handleSwipe = (direction: "left" | "right") => {
    if (!cardDeck.length) return;

    const current = cardDeck[0];
    let newDeck = cardDeck.slice(1);

    if (direction === "left") {
      newDeck = [...newDeck, current];
      const isWas = errors.cards.some((item) => item.id === current.id);

      setErrors((prev) => ({
        count: prev.count + 1,
        cards: isWas ? prev.cards : [...prev.cards, current],
      }));

      if (random) {
        newDeck = shuffleArray(newDeck);
      }
    }

    setCardDeck(newDeck);
    setFlipped(false);
  };

  const currentCard = cardDeck[0];

  if (!currentCard) {
    return (
      <div className=" p-6 bg-blue-50 dark:bg-bgItem rounded-2xl shadow text-center mt-[10%]">
        <Trophy className="w-14 h-14 text-blueCl dark:text-bgLight mx-auto mb-2" />
        <h2 className="text-xl font-bold mb-2 dark:text-bgLight">Все карточки просмотрены!</h2>

        {errors?.count ? (
          <p className="text-gray-600 dark:text-bgLight mb-4">
            Количество ошибок: {errors?.count} <br />
            Нужно повторить слова:{" "}
            {errors?.cards
              .map((item) =>
                quizSettings.language === "en" ? item.name : item.intlName
              )
              .join(", ")}
          </p>
        ) : (
          <p className="text-gray-600 mb-4">Отличная работа — ты справился!</p>
        )}

        <button
          onClick={() => router.push("/my-cards")}
          className="inline-flex items-center gap-2 px-5 py-2 bg-blueCl dark:bg-bgLight  text-bgLight dark:text-bgDark rounded-lg dark:border-[1px] dark:border-bgLight font-medium hover:bg-blue-700  dark:hover:bg-bgItem dark:hover:text-bgLight transition"
        >
          Перейти к моим карточкам
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className=" mt-[10%] flex flex-col items-center min-h-[300px]">
      <div
        className={`w-full max-w-sm rounded-xl shadow-lg cursor-pointer transition-colors duration-300 ${
          flipped ? `bg-blueCl dark:bg-bgItem` : `bg-blueCl dark:bg-bgItem`
        }`}
        onClick={!flipped ? handleFlip : undefined}
      >
        <div className="p-6">
          {!flipped ? (
            <>
              <h3 className={`text-center font-bold text-xl mb-2 text-bgLight`}>
                {quizSettings.language === "en"
                  ? currentCard.name
                  : currentCard.intlName}
              </h3>
              <p className="text-center text-bgLight">
                {quizSettings.language === "en"
                  ? currentCard.description
                  : currentCard.intlDescription}
              </p>
            </>
          ) : (
            <>
              <h4
                className={`text-center font-bold text-lg mb-3 text-bgLight border-b-[1px] border-bgLight`}
              >
                {currentCard.name} / {currentCard.intlName}
              </h4>
              <p className="text-center text-bgLight mb-2 border-b-[1px] border-bgLight border-dashed">
                {currentCard.description}
              </p>
              <p className="text-center text-bgLight">
                {currentCard.intlDescription}
              </p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleSwipe("left")}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 mr-2 bg-blue-100 dark:bg-bgItem dark:border-[1px] dark:border-bgLight text-blueCl dark:text-bgLight rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-bgItem dark:hover:text-bgLight  transition"
                >
                  <RotateCcw className="w-4 h-4" />
                  Вернуть
                </button>
                <button
                  onClick={() => handleSwipe("right")}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 ml-2 bg-blueCl dark:bg-bgLight  text-bgLight dark:text-bgDark rounded-lg font-medium hover:bg-blueCl dark:hover:bg-bgItem dark:hover:text-bgLight dark:border-[1px] transition"
                >
                  <CheckCircle className="w-4 h-4" />
                  Правильно
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
