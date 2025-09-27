import { CardType } from "@/lib/types/types";
import { create } from "zustand";

interface CurrentCard {
  currentCard: CardType | null;
  setCurrentCard: (card: CardType | null) => void;
}

export const useCurrentCard = create<CurrentCard>((set) => ({
  currentCard: null,
  setCurrentCard: (cards) => set({ currentCard: cards }),
}));
