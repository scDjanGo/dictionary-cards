import { create } from "zustand";
import { QuizSettingsType } from "@/lib/types/types";

interface SettingsQuizStore {
  quizSettingsStore: QuizSettingsType;
  setQuizSettingsStore: (setting: QuizSettingsType) => void;
}

export const useQuizSettingsStore = create<SettingsQuizStore>((set) => ({
  quizSettingsStore: {
    language: "en",
    time: false,
    type: "swipe",
    random: true,
  },
  setQuizSettingsStore: (settings) => set({ quizSettingsStore: settings }),
}));
