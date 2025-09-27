"use client";

import DefaultDictionary_Words from "@/lib/data/dictionary-words.json";
import Active_Header from "../header/Active_Header";
import { useEffect } from "react";
import { useToggle } from "@/features/hooks/useToggle";
import { usePathname } from "next/navigation";
import { useCurrentCardsStore } from "@/lib/zustand";
import Container_Cards from "./Container_Cards";

export default function Subcategory_Cards_Container({
  subcategory,
}: {
  subcategory?: string;
}) {
  const pathname = usePathname();
  const currentCards = useCurrentCardsStore((state) => state.currentCards);
  const setCurrentCards = useCurrentCardsStore(
    (state) => state.setCurrentCards
  );
  const [render, setRender] = useToggle(false);

  useEffect(() => {
    const Filter_Dictionary: any[] = subcategory
      ? DefaultDictionary_Words.filter(
          (item) => item.catId === Number(subcategory)
        )
      : DefaultDictionary_Words;

    setCurrentCards(Filter_Dictionary);
    setRender(true);
  }, [pathname]);

  if (!render) return;

  return (
    <>
      <Active_Header currentCards={currentCards} />
      <Container_Cards />
    </>
  );
}
