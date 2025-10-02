"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CardType } from "@/lib/types/types";
import styles from "../../styles/quiz/quiz-connect/game.module.css";
import Block_Button from "./play-quiz-connect/Block_Button";
import { typeLine } from "@/lib/types/types";
import { Lines_Container } from "./play-quiz-connect/Lines_Container";
import { shuffleSortArray } from "@/features/features/shuffle-sort";
import { ArrowRight, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

const OFFSET = 1_000_000;
function chunkArray<CardType>(array: CardType[], size: number): CardType[][] {
  const result: CardType[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

type Props = {
  cards: CardType[];
  random: boolean;
  errors: { count: number; cards: CardType[] };
  setErrors: React.Dispatch<
    React.SetStateAction<{ count: number; cards: CardType[] }>
  >;
};

export default function Play_Quiz_Connect({
  cards,
  random,
  errors,
  setErrors,
}: Props) {
  const router = useRouter();
  const groups = chunkArray(cards, 5);
  const [step, setStep] = useState(0);
  const [currentFrom, setCurrentFrom] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const buttonRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const [lines, setLines] = useState<typeLine[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentGroup, setCurrentGroup] = useState(groups[step] || []);
  const [endQuiz, setEndQuiz] = useState(false);

  // Hidden vertical scroll
  useEffect(() => {
    const main_container = document.getElementById("main-container");

    document.body.classList.add("overflow-hidden");
    if (main_container) main_container.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
      const main_container_cleanup = document.getElementById("main-container");
      if (main_container_cleanup)
        main_container_cleanup.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    if (step === 0) return;
    setCurrentGroup(groups[step] || []);
  }, [step]);

  useEffect(() => {
    console.log(groups[step]);

    if (groups[step]) return;
    setEndQuiz(true);
  }, [step]);

  const leftSide = useMemo(() => {
    return shuffleSortArray(shuffleSortArray(currentGroup)).map((card) => ({
      id: card.id,
      name: card.name,
      description: card.description,
      side: "left" as const,
    }));
  }, [currentGroup]);

  const rightSide = useMemo(() => {
    return shuffleSortArray(currentGroup).map((card) => ({
      id: card.id + OFFSET,
      name: card.intlName,
      description: card.intlDescription,
      side: "right" as const,
    }));
  }, [currentGroup]);

  const BLOCK_ITEMS = [...leftSide, ...rightSide];

  const handleStart = (id: number) => setCurrentFrom(id);

  const handleMove = (clientX: number, clientY: number) => {
    if (currentFrom !== null) setMousePos({ x: clientX, y: clientY });
  };

  const handleEnd = (clientX: number, clientY: number) => {
    if (currentFrom === null) return;

    const targetId = Object.entries(buttonRefs.current).find(([_, el]) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      );
    });

    if (targetId) {
      const fromItem = BLOCK_ITEMS.find((i) => i.id === currentFrom);
      const toItem = BLOCK_ITEMS.find((i) => i.id === Number(targetId[0]));
      if (fromItem && toItem && fromItem.side !== toItem.side) {
        if (
          lines.some(
            (line) => line.fromId === fromItem.id || line.toId === toItem.id
          )
        ) {
          setCurrentFrom(null);
          setMousePos(null);
          return;
        }
        setLines((prev) => [
          ...prev,
          { id: Date.now(), fromId: fromItem.id, toId: toItem.id },
        ]);
      }
    }

    setCurrentFrom(null);
    setMousePos(null);
  };

  const handleNextGroup = () => {
    if (lines.some((item) => item.fromId !== item.toId - OFFSET)) {
      setCurrentGroup((prev) => [
        ...prev.filter(
          (item) =>
            !lines.some(
              (elem) =>
                elem.fromId === item.id && elem.toId - OFFSET === item.id
            )
        ),
      ]);
      // setLines((prev) => [
      //   ...prev.filter((item) => item.fromId !== item.toId - OFFSET),
      // ]);
      setLines([]);
      return;
    }

    setStep((s) => s + 1);
    setLines([]);
  };

  return !endQuiz ? (
    <div
      className={`${styles.app__container} overflow-hidden mt-[20%]`}
      ref={containerRef}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseUp={(e) => handleEnd(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        if (e.touches.length === 1) {
          const touch = e.touches[0];
          handleMove(touch.clientX, touch.clientY);
        }
      }}
      onTouchEnd={(e) => {
        if (e.changedTouches.length === 1) {
          const touch = e.changedTouches[0];
          handleEnd(touch.clientX, touch.clientY);
        }
      }}
    >
      <Lines_Container
        lines={lines}
        currentFrom={currentFrom}
        mousePos={mousePos}
        buttonRefs={buttonRefs.current}
        arr={BLOCK_ITEMS as any}
        deleteLine={(id) => setLines((prev) => prev.filter((l) => l.id !== id))}
      />

      <div className={styles.container__columns}>
        <div className={styles.column}>
          {leftSide.map((item) => (
            <Block_Button
              key={item.id + "-left"}
              item={item}
              // isUsed={lines.some((l) => l.fromId === item.id)}
              onStart={handleStart}
              buttonRefs={buttonRefs.current}
            />
          ))}
        </div>

        <div className={styles.column}>
          {rightSide.map((item) => (
            <Block_Button
              key={item.id + "-right"}
              item={item}
              // isUsed={lines.some((l) => l.toId === item.id)}
              onStart={handleStart}
              buttonRefs={buttonRefs.current}
            />
          ))}
        </div>
      </div>

      {/* <Control_Buttons lines={lines} setLines={setLines} /> */}

      {/* Кнопка "Дальше" */}
      {lines.length === currentGroup.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleNextGroup}
            className="px-4 py-2 border-[1px] border-blueCl bg-blueCl dark:bg-bgItem dark:border-bgLight text-white rounded-lg"
          >
            Дальше
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className="mt-[20%] p-6 bg-blue-50 dark:bg-bgItem rounded-2xl shadow text-center">
      <Trophy className="w-14 h-14 text-blue-600 dark:text-bgLight mx-auto mb-2" />
      <h2 className="text-xl font-bold mb-2 dark:text-bgLight">
        Все карточки просмотрены!
      </h2>

      {/* {errors?.count ? (
        <p className="text-gray-600 dark:text-bgLight mb-4">
          Количество ошибок: {errors?.count} <br />
          Нужно повторить слова:{" "}
          {errors?.cards
            .map((item) =>
              quizSettings.language === "en" ? item.name : item.intlName
            )
            .join(", ")}
        </p>
      ) : (
        <p className="text-gray-600 mb-4 dark:text-bgLight">
          Отличная работа — ты справился!
        </p>
      )} */}

      <p className="text-gray-600 mb-4 dark:text-bgLight">
        Отличная работа — ты справился!
      </p>

      <button
        onClick={() => router.push("/my-cards")}
        className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 dark:bg-bgItem dark:border-[1px] dark:border-bgLight dark:hover:text-bgItem dark:hover:bg-bgLight  text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Перейти к моим карточкам
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
