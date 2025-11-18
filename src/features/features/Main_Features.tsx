"use client";

import { CardType, typeViewCards } from "@/lib/types/types";
import { useBlockedCardsStore, useTimerQuizStore, useTypeOfCards } from "@/lib/zustand";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Main_Features() {
  const pathname = usePathname()
  const setBlockedCards = useBlockedCardsStore((state) => state.setBlockCards);
  const setTypeOfCards = useTypeOfCards((state) => state.setTypeOfCard);
  const finishOfTimerQuiz = useTimerQuizStore((s) => s.useFinishTimer);

  //  Create First category
  useEffect(() => {
    const my_categories: any[] = JSON.parse(
      localStorage.getItem(`my-categories`) || "[]"
    );

    if (!my_categories || !my_categories.length) {
      const newCategory = {
        id: 0,
        name: "Others",
        intlName: "Другие",
        createDate: Date.now(),
      };

      localStorage.setItem("my-categories", JSON.stringify([newCategory]));
      return;
    }
  }, []);

  // In Basket Items
  useEffect(() => {
    const basket_card: CardType[] = JSON.parse(
      localStorage.getItem("basket-cards") || "[]"
    );

    if (basket_card.length) {
      setBlockedCards(basket_card);
    }
  }, []);

  // Choose type of cards
  useEffect(() => {
    const selectedType: null | typeViewCards | string =
      localStorage.getItem("type-of-cards");

    if (!selectedType) return;
    setTypeOfCards(selectedType as typeViewCards);
  }, []);


  // Отключение таймера 
    useEffect(() => {
    if (pathname !== "/quiz/play") {
      finishOfTimerQuiz();
    }
  }, [pathname]);

  return <></>;
}
