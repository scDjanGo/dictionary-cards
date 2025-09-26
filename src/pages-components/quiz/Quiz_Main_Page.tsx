"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuizSettingsType } from "@/lib/types/types";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";
import { Hand, Languages, Pencil, Play, Shuffle, Volume2 } from "lucide-react";

export default function Quiz_Main_Page() {
  const router = useRouter();
  const setQuizSettingsStore = useQuizSettingsStore(
    (state) => state.setQuizSettingsStore
  );
  const [quizSettings, setQuizSettings] = useState<QuizSettingsType>({
    language: "en",
    time: false,
    type: "swipe",
    random: true,
  });


  useEffect(() => {
    const quiz_cards = JSON.parse(sessionStorage.getItem("quiz-cards") || "[]");

    if (Array.isArray(quiz_cards) && !quiz_cards.length) {
      if (window.history.length <= 1) {
        router.push("/categories");
      } else {
        router.back();
      }
    }
  }, []);

  const handleChange = (
    key: keyof QuizSettingsType,
    value: QuizSettingsType[keyof QuizSettingsType]
  ) => {
    setQuizSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleStartQuiz = () => {
    sessionStorage.setItem("quiz-settings", JSON.stringify(quizSettings));
    localStorage.setItem("quiz-settings", JSON.stringify(quizSettings));
    setQuizSettingsStore(quizSettings);
    router.push(`/quiz/play`);
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="rounded-2xl shadow-lg p-6 sm:p-8 bg-bgLight  dark:bg-bgItem">
        {/* Заголовок */}
        <h2
          className={`text-center font-bold text-xl text-blueCl dark:text-bgLight`}
        >
          Настройки квиза
        </h2>

        {/* Язык */}
        <div className="mt-6">
          <label className="flex text-xl items-center font-semibold text-gray-700 mb-2  dark:text-bgLight">
            <Languages className="w-7 h-7 mr-2 text-blueCl  dark:text-bgLight" />
            Язык
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1 text-xl  dark:text-bgLight">
              <input
                type="radio"
                name="language"
                value="en"
                checked={quizSettings.language === "en"}
                onChange={(e) => handleChange("language", "en")}
                className="accent-blueCl  dark:accent-bgLight w-[20px] h-[20px]"
              />
              Английский
            </label>
            <label className="flex items-center gap-1 text-xl  dark:text-bgLight">
              <input
                type="radio"
                name="language"
                value="ru"
                checked={quizSettings.language === "ru"}
                onChange={(e) => handleChange("language", "ru")}
                className="accent-blueCl dark:accent-bgLight  w-[20px] h-[20px]"
              />
              Русский
            </label>
          </div>
        </div>

        {/* Рандом */}
        <div className="mt-6">
          <label className="flex items-center gap-2 font-semibold text-gray-700 dark:text-bgLight text-xl leading-[1.1]">
            <input
              type="checkbox"
              checked={quizSettings.random}
              onChange={(e) => handleChange("random", e.target.checked)}
              className="accent-blueCl dark:accent-bgLight w-[20px] h-[20px]"
            />
            <Shuffle className="w-7 h-7 text-blueCl dark:text-bgLight" />
            Случайный порядок карточек
          </label>
        </div>

        {/* Тип квиза */}
        <div className="mt-6">
          <label className="block font-semibold text-gray-700 dark:text-bgLight mb-2">
            Тип квиза
          </label>
          <div className={`flex flex-col gap-2 `}>
            <label className="flex items-center gap-2 text-xl dark:text-bgLight">
              <input
                type="radio"
                name="quizType"
                value="swipe"
                checked={quizSettings.type === "swipe"}
                onChange={(e) => handleChange("type", "swipe")}
                className="accent-blueCl dark:accent-bgLight w-[20px] h-[20px]"
              />
              <Hand className="w-7 h-7 text-blueCl dark:text-bgLight  text-xl" />
              Swipe
            </label>

            <label className="flex items-center gap-2 text-xl dark:text-bgLight">
              <input
                type="radio"
                name="quizType"
                value="write"
                checked={quizSettings.type === "write"}
                onChange={(e) => handleChange("type", "write")}
                className="accent-blueCl dark:accent-bgLight w-[20px] h-[20px]"
              />
              <Pencil className="w-7 h-7 text-blueCl dark:text-bgLight" />
              Write
            </label>

            <label className="flex items-center gap-2 text-xl dark:text-bgLight">
              <input
                type="radio"
                name="quizType"
                value="speech"
                checked={quizSettings.type === "speech"}
                onChange={(e) => handleChange("type", "speech")}
                className="accent-blueCl dark:accent-bgLight w-[20px] h-[20px]"
              />
              <Volume2 className="w-7 h-7 text-blueCl dark:text-bgLight" />
              Listen
            </label>
          </div>
        </div>

        {/* Кнопка старта */}
        <div className="mt-8 text-center">
          <button
            onClick={handleStartQuiz}
            className={`inline-flex items-center text-lg justify-center gap-2 rounded-lg font-bold shadow-md transition px-6 py-3 text-bgLight  bg-blueCl dark:bg-bgItem dark:border-[1px] dark:hover:bg-bgLight dark:hover:text-bgItem dark:border-bgLight  `}
          >
            Начать квиз
            <Play className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
