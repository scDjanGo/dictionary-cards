import { create } from "zustand";
import { CardType } from "@/lib/types/types";

interface StoreType {
  data: CardType[];
  setBlockCards: (cards: CardType[]) => void;
  addBlockCard: (card: CardType) => void;
  removeBlockCard: (card: CardType) => void;
}

const useBlockedCardsStore = create<StoreType>((set) => ({
  data: [],
  setBlockCards(cards) {
    set({ data: cards });
  },
  addBlockCard(card) {
    set((prev) => ({ data: [...prev.data, card] }));
  },
  removeBlockCard(card) {
    set((prev) => ({
      data: [...prev.data.filter((item) => item.id !== card.id)],
    }));
  },
}));

export { useBlockedCardsStore };
