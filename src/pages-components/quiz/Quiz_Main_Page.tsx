"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuizSettingsType } from "@/lib/types/types";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";
import { ArrowLeftIcon, CornerDownLeftIcon, Hand, Languages, LinkIcon, Pencil, Play, Volume2 } from "lucide-react";
import Custom_Radio from "@/UI/buttons/quiz/Custom_Radio";
import Custom_Checkbox from "@/UI/buttons/quiz/Custom_Checkbox";
import Custom_Button from "@/UI/buttons/quiz/Custom_Button";

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
        router.push("/cards");
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
      <div className="rounded-2xl shadow-lg p-6 sm:p-8 bg-bgLight dark:bg-bgItem">
        <h2 className="text-center font-bold text-xl text-blueCl dark:text-bgLight">
          Настройки квиза
        </h2>

        {/* Язык */}
        <div className="mt-6">
          <label className="flex text-xl items-center font-semibold text-gray-700 mb-2 dark:text-bgLight">
            <Languages className="w-7 h-7 mr-2 text-blueCl dark:text-bgLight" />
            Язык
          </label>
          <div className="flex gap-4">
            <Custom_Radio
              label="Английский"
              value="en"
              checked={quizSettings.language === "en"}
              onChange={() => handleChange("language", "en")}
            />
            <Custom_Radio
              label="Русский"
              value="ru"
              checked={quizSettings.language === "ru"}
              onChange={() => handleChange("language", "ru")}
            />
          </div>
        </div>

        {/* Рандом */}
        <div className="mt-6">
          <Custom_Checkbox
            label="Случайный порядок карточек"
            checked={quizSettings.random}
            onChange={() => handleChange("random", !quizSettings.random)}
          />
        </div>

        {/* Тип квиза */}
        <div className="mt-6">
          <label className="block font-semibold text-gray-700 dark:text-bgLight mb-2">
            Тип квиза
          </label>
          <div className="flex flex-wrap gap-2">
            <Custom_Radio
              label="Swipe"
              value="swipe"
              checked={quizSettings.type === "swipe"}
              onChange={() => handleChange("type", "swipe")}
              icon={
                <Hand
                  className={`w-7 h-7 text-blueCl  dark:text-bgLight ${
                    quizSettings.type === "swipe" ? "!text-bgLight" : ""
                  }`}
                />
              }
            />
            <Custom_Radio
              label="Write"
              value="write"
              checked={quizSettings.type === "write"}
              onChange={() => handleChange("type", "write")}
              icon={
                <Pencil
                  className={`w-7 h-7 text-blueCl dark:text-bgLight ${
                    quizSettings.type === "write" ? "!text-bgLight" : ""
                  }`}
                />
              }
            />
            <Custom_Radio
              label="Listen"
              value="speech"
              checked={quizSettings.type === "speech"}
              onChange={() => handleChange("type", "speech")}
              icon={
                <Volume2
                  className={`w-7 h-7 text-blueCl dark:text-bgLight ${
                    quizSettings.type === "speech" ? "!text-bgLight" : ""
                  }`}
                />
              }
            />
            <Custom_Radio
              label="Connect"
              value="connect"
              checked={quizSettings.type === "connect"}
              onChange={() => handleChange("type", "connect")}
              icon={
                <LinkIcon
                  className={`w-7 h-7 text-blueCl dark:text-bgLight ${
                    quizSettings.type === "connect" ? "!text-bgLight" : ""
                  }`}
                />
              }
            />
          </div>
        </div>

        {/* Кнопка старта */}
        <div className="mt-8 text-center">
          <Custom_Button
            onClick={handleStartQuiz}
            icon={<Play className="w-5 h-5" />}
          >
            Начать квиз
          </Custom_Button>
        </div>
      </div>
    </div>
  );
}
