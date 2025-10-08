import { CategoryType } from "@/lib/types/types";
import { create } from "zustand";

interface CurrentCategory {
  currentCategory: CategoryType | null;
  setCurrentCategory: (card: CategoryType | null) => void;
}

export const useCurrentCategory = create<CurrentCategory>((set) => ({
  currentCategory: null,
  setCurrentCategory: (cards) => set({ currentCategory: cards }),
}));
