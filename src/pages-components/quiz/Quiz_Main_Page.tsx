"use client";

import { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Typography,
  Box,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import TranslateIcon from "@mui/icons-material/Translate";
import TimerIcon from "@mui/icons-material/Timer";
import HearingIcon from "@mui/icons-material/Hearing";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import EditIcon from "@mui/icons-material/Edit";
import MicIcon from "@mui/icons-material/Mic";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      <div className="rounded-2xl shadow-lg p-6 sm:p-8 bg-gradient-to-r from-[#E3F2FD] to-white">
        {/* Заголовок */}
        <h2
          className={`text-center font-bold text-blueCl ${
            isSmallScreen ? "text-xl" : "text-2xl"
          }`}
        >
          Настройки квиза
        </h2>

        {/* Язык */}
        <div className="mt-6">
          <label className="flex text-xl items-center font-semibold text-gray-700 mb-2">
            <Languages className="w-7 h-7 mr-2 text-blueCl" />
            Язык
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1 text-xl">
              <input
                type="radio"
                name="language"
                value="en"
                checked={quizSettings.language === "en"}
                onChange={(e) => handleChange("language", "en")}
                className="accent-blueCl w-[20px] h-[20px]"
              />
              Английский
            </label>
            <label className="flex items-center gap-1 text-xl">
              <input
                type="radio"
                name="language"
                value="ru"
                checked={quizSettings.language === "ru"}
                onChange={(e) => handleChange("language", "ru")}
                className="accent-blueCl  w-[20px] h-[20px]"
              />
              Русский
            </label>
          </div>
        </div>

        {/* Рандом */}
        <div className="mt-6">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={quizSettings.random}
              onChange={(e) => handleChange("random", e.target.checked)}
              className="accent-blueCl w-[20px] h-[20px]"
            />
            <Shuffle className="w-5 h-5 text-blueCl" />
            Случайный порядок карточек
          </label>
        </div>

        {/* Тип квиза */}
        <div className="mt-6">
          <label className="block font-semibold text-gray-700 mb-2">
            Тип квиза
          </label>
          <div
            className={`flex ${
              isSmallScreen ? "flex-col gap-2" : "flex-row gap-6"
            }`}
          >
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="quizType"
                value="swipe"
                checked={quizSettings.type === "swipe"}
                onChange={(e) => handleChange("type", "swipe")}
                className="accent-blueCl"
              />
              <Hand className="w-5 h-5 text-blueCl" />
              Swipe
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="quizType"
                value="write"
                checked={quizSettings.type === "write"}
                onChange={(e) => handleChange("type", "write")}
                className="accent-blueCl"
              />
              <Pencil className="w-5 h-5 text-blueCl" />
              Write
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="quizType"
                value="speech"
                checked={quizSettings.type === "speech"}
                onChange={(e) => handleChange("type", "speech")}
                className="accent-blueCl"
              />
              <Volume2 className="w-5 h-5 text-blueCl" />
              Listen
            </label>
          </div>
        </div>

        {/* Кнопка старта */}
        <div className="mt-8 text-center">
          <button
            onClick={handleStartQuiz}
            className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold shadow-md transition px-6 py-3 text-white ${
              isSmallScreen ? "text-base" : "text-lg"
            } bg-gradient-to-r from-blueCl to-blue-500 hover:from-blueCl hover:to-blueCl`}
          >
            Начать квиз
            <Play className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
