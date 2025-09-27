import {
  useBlockedCardsStore,
  useCurrentCardsStore,
  useTypeOfCards,
} from "@/lib/zustand";
import Default_Card from "../cards/Default_Card";
import Table_Card from "../cards/Table_Card";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CardType } from "@/lib/types/types";

export default function Container_Table() {
  const pathname = usePathname();
  const typeOfCards = useTypeOfCards((state) => state.value);
  const blockedCards = useBlockedCardsStore((state) => state.data);
  const currentCards = useCurrentCardsStore((state) => state.currentCards);
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    if (pathname.includes("blocked-cards")) {
      setCards(blockedCards);

      return;
    }

    setCards(
      currentCards.filter(
        (elem) => !blockedCards.some((item) => item.id === elem.id)
      )
    );
  }, [pathname, blockedCards, currentCards]);

  switch (typeOfCards) {
    case "card":
      return (
        <div className=" mt-[6px] gap-[12px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => (
            <Default_Card key={card.id} data={card} />
          ))}
        </div>
      );
    case "table":
      return (
        <div className="w-full flex flex-col gap-[12px]">
          {cards.map((card) => (
            <Table_Card key={card.id} data={card} />
          ))}
        </div>
      );
    default:
      return (
        <div className=" mt-[6px] gap-[12px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => (
            <Default_Card key={card.id} data={card} />
          ))}
        </div>
      );
  }
}
