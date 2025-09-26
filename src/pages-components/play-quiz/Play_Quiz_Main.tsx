"use client";

import Loading_Component from "@/components/loading-component/Loading_Component";
import { CardType, QuizSettingsType } from "@/lib/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Play_Quiz_Swipe_Type from "./Play_Quiz_Swipe_Type";
import { useQuizSettingsStore } from "@/lib/zustand/quizSettings/useQuizSettings";
import Play_Quiz_Write_Type from "./Play_Quiz_Write";
import Play_Quiz_Speech_Type from "./Play_Quiz_Speech";

export default function Play_Quiz_Main() {
  const router = useRouter();
  const [quizCards, setQuizCards] = useState<null | CardType[]>(null);
  const setQuizSettingsStore = useQuizSettingsStore(
    (state) => state.setQuizSettingsStore
  );
  const [quizSettings, setQuizSetting] = useState<null | QuizSettingsType>(
    null
  );

  const [errors, setErrors] = useState<{count: number, cards: CardType[]}>({
    count: 0,
    cards: []
  })


  // Check items
  useEffect(() => {
    const quiz_cards = JSON.parse(sessionStorage.getItem("quiz-cards") || "[]");

    if (Array.isArray(quiz_cards) && quiz_cards.length) {
      setQuizCards(quiz_cards);
      return;
    }

    if (window.history.length <= 1) {
      router.push("/categories");
    } else {
      router.back();
    }
  }, []);

  useEffect(() => {
    const quiz_settings = JSON.parse(
      sessionStorage.getItem("quiz-settings") || "[]"
    );
    if (!Array.isArray(quiz_settings)) {
      setQuizSetting(quiz_settings);
      setQuizSettingsStore(quiz_settings);
      return;
    }

    if (window.history.length <= 1) {
      router.push("/categories");
    } else {
      router.back();
    }
  }, []);

  return (
    <div className={``}>
      <Loading_Component
        open={!quizCards || !quizSettings}
        message="Подгружаем контент"
      />
      {quizCards && quizSettings && quizSettings.type === "swipe" && (
        <Play_Quiz_Swipe_Type  cards={quizCards} random={quizSettings.random} errors={errors} setErrors={setErrors} />
      )}{" "}
      {quizCards && quizSettings && quizSettings.type === "write" && (
        <Play_Quiz_Write_Type cards={quizCards} random={quizSettings.random} errors={errors} setErrors={setErrors}  />
      )}
       {quizCards && quizSettings && quizSettings.type === "speech" && (
        <Play_Quiz_Speech_Type cards={quizCards} random={quizSettings.random} errors={errors} setErrors={setErrors} />
      )}
    </div>
  );
}
