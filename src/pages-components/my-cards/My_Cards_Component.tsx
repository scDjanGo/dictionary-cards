"use client";

import { useEffect } from "react";
import Default_Card from "@/components/cards/Default_Card";
import { CardType } from "@/lib/types/types";
import Empty_My_Cards_Page from "@/components/empty-pages/Empty_My_Cards_Page";
import Active_Header from "@/components/header/Active_Header";
import { useToggle } from "@/features/hooks/useToggle";
import { useBlockedCardsStore, useCurrentCardsStore } from "@/lib/zustand";
import Container_Cards from "@/components/containers/Container_Cards";

export default function My_Cards_Component({
  currentCardsProps,
}: {
  currentCardsProps?: CardType[];
}) {
  const [render, setRender] = useToggle();
  const currentCards = useCurrentCardsStore((state) => state.currentCards);
  const blockedCards = useBlockedCardsStore((state) => state.data);
  const setCurrentCards = useCurrentCardsStore(
    (state) => state.setCurrentCards
  );

  useEffect(() => {
    if (Array.isArray(currentCardsProps)) {
      setRender(true);
      return;
    }

    const userCards: CardType[] = JSON.parse(
      localStorage.getItem("my-cards") || "[]"
    );
    const basket_cards: CardType[] = JSON.parse(
      localStorage.getItem("basket-cards") || "[]"
    );
    if (!basket_cards.length) {
      setCurrentCards(userCards);
      setRender(true);
      return;
    }

    setCurrentCards(
      userCards.filter(
        (item) => !basket_cards.some((elem) => elem.id === item.id)
      )
    );
    setRender(true);
  }, []);

  if (!render) return;

  return (
    <>
      <Active_Header currentCards={currentCards} />
      {currentCards.length ? <Container_Cards /> : <Empty_My_Cards_Page />}
    </>
  );
}
