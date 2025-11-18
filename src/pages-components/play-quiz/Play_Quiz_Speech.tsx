"use client";

import { useState, useEffect } from "react";
import { CardType } from "@/lib/types/types";
import { useRouter } from "next/navigation";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";
import { shuffleSortArray } from "@/features/features/shuffle-sort";
import {
  Trophy,
  ArrowRight,
  Volume2,
  Eye,
  RotateCcw,
  CheckCircle2,
  Rotate3d,
} from "lucide-react";
import { speakWord } from "@/features/features/speak-word";
import { useTimerQuizStore } from "@/lib/zustand";

export default function Play_Quiz_Speech_Type({
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
  const [revealed, setRevealed] = useState(false);
  const quizSettings = useQuizSettingsStore((state) => state.quizSettingsStore);
  const router = useRouter();
  const timerOfQuiz = useTimerQuizStore((store) => store.stringValue);
  const { useFinishTimer } = useTimerQuizStore();

  useEffect(() => {
    setCardDeck(random ? shuffleSortArray(cards) : [...cards]);
  }, [cards, random]);

  const currentCard = cardDeck[0];

  useEffect(() => {
    if (!currentCard || flipped) return;
    const textToSpeak =
      quizSettings.language === "en" ? currentCard.name : currentCard.intlName;
    const lang = quizSettings.language === "en" ? "en-US" : "ru-RU";
    speakWord(textToSpeak, lang);
  }, [currentCard, flipped, quizSettings.language]);

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

      if (random) newDeck = shuffleSortArray(newDeck);
    }

    setCardDeck(newDeck);
    setFlipped(false);
    setRevealed(false);

    if(!newDeck.length) {
      useFinishTimer()
    }
  };

  if (!currentCard) {
    return (
      <div className="mt-[20%] p-6 bg-blue-50 dark:bg-bgItem rounded-2xl shadow text-center">
        <Trophy className="w-14 h-14 text-blue-600 dark:text-bgLight mx-auto mb-2" />
        <h2 className="text-xl font-bold mb-2 dark:text-bgLight">
          Все карточки просмотрены!
        </h2>

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
          <p className="text-gray-600 mb-4 dark:text-bgLight">
            Отличная работа — ты справился!
          </p>
        )}
        
        {quizSettings.time && (
          <p className="text-xl font-bold mb-2 dark:text-bgLight ">
            Время: {timerOfQuiz}
          </p>
        )}

        <button
          onClick={() => router.push("/my-cards")}
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 dark:bg-bgItem dark:border-[1px] dark:border-bgLight dark:hover:text-bgItem dark:hover:bg-bgLight  text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Перейти к моим карточкам
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const lang = quizSettings.language === "en" ? "en-US" : "ru-RU";
  const cardTitle =
    quizSettings.language === "en" ? currentCard.name : currentCard.intlName;

  return (
    <div className="mt-[20%] flex flex-col items-center min-h-[300px]">
      <div
        className={`w-full max-w-sm rounded-xl shadow-lg p-4 transition-colors duration-300 bg-blue-50 dark:bg-bgItem`}
      >
        {!flipped ? (
          <>
            <h3
              className={`text-center font-bold text-xl mb-7 text-blue-700 dark:text-bgLight transition ${
                revealed ? "blur-0" : "blur-sm"
              }`}
            >
              {cardTitle}
            </h3>

            <div className="flex flex-wrap justify-between gap-2 mt-3">
              <button
                onClick={() => speakWord(cardTitle, lang)}
                className={`${buttonStyle()}`}
              >
                <Volume2 className="w-4 h-4" />
                Озвучить
              </button>
              <button
                onClick={() => setRevealed(true)}
                className={buttonStyle()}
              >
                <Eye className="w-4 h-4" />
                Показать
              </button>
              <button onClick={handleFlip} className={buttonStyle()}>
                <Rotate3d className="w-4 h-4" />
                Перевернуть
              </button>
            </div>
          </>
        ) : (
          <>
            <h4 className="text-center font-bold text-lg mb-2 text-blueCl dark:text-bgLight dark:pb-2 dark:border-b-[1px] dark:border-bgLight ">
              {currentCard.name} / {currentCard.intlName}
            </h4>
            <p className="text-center text-gray-800 mb-2 pb-2 dark:text-bgLight dark:border-b-[1px] dark:border-dashed  ">
              {currentCard.description}
            </p>
            <p className="text-center text-gray-500 dark:text-bgLight">
              {currentCard.intlDescription}
            </p>

            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={() => handleSwipe("left")}
                className={buttonStyle("light")}
              >
                <RotateCcw className="w-4 h-4" />
                Вернуть
              </button>
              <button
                onClick={() => handleSwipe("right")}
                className={buttonStyle("primary")}
              >
                <CheckCircle2 className="w-4 h-4" />
                Правильно
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function buttonStyle(type: "primary" | "light" = "light") {
  return [
    "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium transition",
    type === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-blue-100 text-blue-700 hover:bg-blue-200",

    "dark:bg-bgItem dark:border-[1px] dark:text-bgLight dark:border-bgLight dark:hover:bg-bgLight dark:hover:text-bgItem",
  ].join(" ");
}
