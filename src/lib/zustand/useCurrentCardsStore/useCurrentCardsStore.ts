import { CardType } from "@/lib/types/types";
import { create } from "zustand";

interface CurrentCardsStore {
  currentCards: CardType[];
  setCurrentCards: (cards: CardType[]) => void;
  removeCardFromState: (id: number) => void;
}

export const useCurrentCardsStore = create<CurrentCardsStore>((set) => ({
  currentCards: [],
  setCurrentCards: (cards) => set({ currentCards: cards }),
  removeCardFromState: (id) =>
    set((state) => ({
      currentCards: state.currentCards.filter((item) => item.id !== id),
    })),
}));
