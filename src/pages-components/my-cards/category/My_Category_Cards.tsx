"use client";

import Active_Header from "@/components/header/Active_Header";
import { CardType } from "@/lib/types/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import My_Cards_Component from "@/pages-components/my-cards/My_Cards_Component";
import { useToggle } from "@/features/hooks/useToggle";
import { useCurrentCardsStore } from "@/lib/zustand";

export default function My_Category_Cards() {
  const router = useRouter();
  const params = useParams<{ category: string | undefined }>();
  const [render, setRender] = useToggle();
  const currentCards = useCurrentCardsStore((state) => state.currentCards);
  const setCurrentCards = useCurrentCardsStore(
    (state) => state.setCurrentCards
  );

  useEffect(() => {
    const my_cards: CardType[] = JSON.parse(
      localStorage.getItem("my-cards") || "[]"
    );

    if (!Array.isArray(my_cards)) {
      router.push("/my-cards");
    }

    setCurrentCards(
      my_cards.filter((item) => item.catId === Number(params.category))
    );

    setRender(true);
  }, [params]);

  if (!render) return;

  return (
    <div>
      <My_Cards_Component currentCardsProps={currentCards} />
    </div>
  );
}
