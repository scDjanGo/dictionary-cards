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
    const cardsFromBasket = JSON.parse(
      localStorage.getItem("basket-cards") || "[]"
    );

    localStorage.setItem(
      "basket-cards",
      JSON.stringify([{ ...card, inBasket: true }, ...cardsFromBasket])
    );
    set((prev) => ({ data: [...prev.data, { ...card, inBasket: true }] }));
  },
  removeBlockCard(card) {
    const cardsFromBasket: CardType[] = JSON.parse(
      localStorage.getItem("basket-cards") || "[]"
    );

    localStorage.setItem(
      "basket-cards",
      JSON.stringify([...cardsFromBasket.filter((item) => item.id !== card.id)])
    );
    set((prev) => ({
      data: [...prev.data.filter((item) => item.id !== card.id)],
    }));
  },
}));

export { useBlockedCardsStore };
