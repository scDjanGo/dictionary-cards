import { create } from "zustand";
import { CardType } from "../types/types";

interface currentCardsStore {
  currentCards: CardType[];
  setCurrentCards: (cards: CardType[]) => void;
  removeCardFromState: (id: number) => void;
}

export const useCurrentCardsStore = create<currentCardsStore>((set) => ({
  currentCards: [],
  setCurrentCards: (cards) => set({ currentCards: cards }),
  removeCardFromState: (id) =>
    set((state) => ({
      currentCards: state.currentCards.filter((item) => item.id !== id),
    })),
}));
