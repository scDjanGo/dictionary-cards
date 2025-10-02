"use client";

import { CardType } from "@/lib/types/types";
import { useCurrentCard, useUiModalsStore } from "@/lib/zustand";
import Speak_Button from "@/UI/buttons/card/Speak_Button";
import { useRef } from "react";

type Props = {
  data: CardType;
};

export default function Table_Card({ data }: Props) {
  const listRef = useRef<HTMLParagraphElement>(null);
  const setCurrentCard = useCurrentCard((state) => state.setCurrentCard);
  const setUiModal = useUiModalsStore((state) => state.setUiModalsStore);

  const handleSelect = () => {
    setCurrentCard(data);
    setUiModal("current-card");
  };
  return (
    <div
      onClick={handleSelect}
      className="w-full border-blueCl dark:border-bgLight border-b-[1px] pb-[6px] flex justify-between items-center  gap-[12px]"
    >
      <div className="flex items-center gap-[12px]">
        <p
          ref={listRef}
          className="text-start text-lg font-semibold text-blueCl dark:text-bgLight max-w-[45%] leading-[1.1]"
        >
          {data.name}
        </p>

        <div
          style={{ minHeight: `${listRef.current?.offsetHeight}px` }}
          className="min-w-[2px]  border-r-[1px] border-blueCl dark:border-bgLight  border-dashed"
        />

        <h2 className="text-start text-lg font-semibold text-blueCl dark:text-bgLight max-w-[45%] m leading-[1.5]">
          {data.intlName}
        </h2>
      </div>

      <Speak_Button data={data} />
    </div>
  );
}
