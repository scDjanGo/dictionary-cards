"use client";

import Default_Card from "@/components/cards/Default_Card";
import Container_Modals from "@/components/containers/Container_Modals";
import { useCurrentCard, useUiModalsStore } from "@/lib/zustand";
import { X } from "lucide-react";

export default function Current_Card_Modal() {
  const currentCard = useCurrentCard((state) => state.currentCard);
  const setCurrentCard = useCurrentCard((state) => state.setCurrentCard);
  const offModal = useUiModalsStore((state) => state.offUiModalsStore);

  const handleClick = () => {
    offModal();
    setCurrentCard(null);
  };

  return (
    <Container_Modals>
      <div className="relative">
        {currentCard && <Default_Card data={currentCard} />}
        <button
          onClick={handleClick}
          className="absolute top-0 right-3 z-10 rounded-full p-2 "
        >
          <X className="w-10 h-10 text-bgLight" />
        </button>
      </div>
    </Container_Modals>
  );
}
