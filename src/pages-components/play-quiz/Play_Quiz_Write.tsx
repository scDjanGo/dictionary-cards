"use client";

import { useState, useEffect, useRef } from "react";
import { CardType } from "@/lib/types/types";
import { Trophy, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Play_Quiz_Write_Type({
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
  const [input, setInput] = useState("");
  const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const continueButtonRef = useRef<HTMLButtonElement>(null);

  const quizSettings = useQuizSettingsStore((state) => state.quizSettingsStore);
  const router = useRouter();

  useEffect(() => {
    setCardDeck(random ? shuffleArray(cards) : [...cards]);
  }, [cards, random]);

  useEffect(() => {
    if (!flipped) {
      inputRef.current?.focus();
    } else {
      continueButtonRef.current?.focus();
    }
  }, [flipped, cardDeck]);

  const currentCard = cardDeck[0];
  const correctAnswer =
    quizSettings.language === "en" ? currentCard?.intlName : currentCard?.name;

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentCard) return;

    const userAnswer = input.trim().toLowerCase();
    const correct = correctAnswer.trim().toLowerCase();

    setWasCorrect(userAnswer === correct);
    setFlipped(true);
  };

  const handleContinue = () => {
    if (!currentCard) return;

    let newDeck = cardDeck.slice(1);

    if (!wasCorrect) {
      newDeck = [...newDeck, currentCard];
      const isWas = errors.cards.some((item) => item.id === currentCard.id);

      setErrors((prev) => ({
        count: prev.count + 1,
        cards: isWas ? prev.cards : [...prev.cards, currentCard],
      }));

      if (random) newDeck = shuffleArray(newDeck);
    }

    setCardDeck(newDeck);
    setFlipped(false);
    setInput("");
    setWasCorrect(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (flipped && e.key === "Enter") {
      e.preventDefault();
      handleContinue();
    }
  };

  if (!currentCard) {
    return (
      <div className=" p-6 bg-blue-50 dark:bg-bgItem rounded-2xl shadow text-center mt-[10%]">
        <Trophy className="w-14 h-14 text-blue-600 dark:text-bgLight mx-auto mb-2" />
        <h2 className="text-xl font-bold mb-2 dark:text-bgLight">
          Все карточки просмотрены!
        </h2>

        {errors?.count ? (
          <p className="text-gray-600 mb-4  dark:text-bgLight">
            Количество ошибок: {errors?.count} <br />
            Нужно повторить слова:{" "}
            {errors?.cards
              .map((item) =>
                quizSettings.language === "en" ? item.name : item.intlName
              )
              .join(", ")}
          </p>
        ) : (
          <p className="text-gray-600 mb-4  dark:text-bgLight">
            Отличная работа — ты справился!
          </p>
        )}

        <button
          onClick={() => router.push("/my-cards")}
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 dark:bg-bgItem  text-bgLight dark:border-[1px] dark:border-bgLight rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-bgLight dark:hover:text-bgItem  transition"
        >
          Перейти к моим карточкам
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div
      className="mt-[10%] flex flex-col items-center min-h-[300px] "
      onKeyDown={handleKeyDown}
    >
      <div
        className={`w-full max-w-sm rounded-xl shadow-lg p-4 transition-colors duration-300 bg-bgLight border-bgItem dark:bg-bgItem border-[1px] dark:border-bgLight`}
      >
        {!flipped ? (
          <form onSubmit={handleAnswerSubmit}>
            <h3
              className={`text-center font-bold text-xl mb-8 text-blueCl dark:text-bgLight`}
            >
              {quizSettings.language === "en"
                ? currentCard.name
                : currentCard.intlName}
            </h3>
            <input
              type="text"
              placeholder="Введите ответ..."
              value={input}
              ref={inputRef}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-base dark:border-[1px] dark:border-bgLight dark:text-bgLight dark:placeholder-bgLight outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-bgLight"
            />
          </form>
        ) : (
          <>
            <h4
              className={`text-center font-bold text-lg mb-3 text-blueCl dark:text-bgLight`}
            >
              {currentCard.name} / {currentCard.intlName}
            </h4>

            <p
              className={`text-center my-2 ${
                wasCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              {wasCorrect ? "Правильно!" : "Неправильно, попробуй снова."}
            </p>

            <div className="text-center">
              <button
                ref={continueButtonRef}
                onClick={handleContinue}
                className="mt-3 px-5 py-2 bg-blueCl  dark:bg-bgItem dark:border-[1px]  text-bgLight rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-bgLight dark:hover:text-bgItem transition"
              >
                Продолжить
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
