"use client";

import { useState } from "react";
import { speakWord } from "@/features/features/speak-word";
import { CardType } from "@/lib/types/types";
import { Volume2Icon } from "lucide-react";

export default function Speak_Button({ data, className }: { data: CardType, className?: string }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsSpeaking(true);

    speakWord(data.name);

    const duration = data.name.split(" ").length * 600; 
    setTimeout(() => setIsSpeaking(false), duration);
  };

  return (
    <button
      onClick={handleSpeak}
      className={`p-3 rounded-full bg-bgLight max-w-[48px] max-h-[48px] transition-transform duration-300 ${
        isSpeaking ? "scale-110 animate-pulse" : "scale-100"
      } ${className ?? ""}`}
    >
      <Volume2Icon
        className={`text-bgItem transition-colors ${
          isSpeaking ? "text-blueCl" : "text-bgItem"
        }`}
      />
    </button>
  );
}
