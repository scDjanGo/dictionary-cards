/* === Slice with line === */
import styles from "@/styles/quiz/quiz-connect/lines_container.module.css"

import Line_Connect from "./Lines_Connect";
import { CardType, typeLine } from "@/lib/types/types";
import { Temp_Line } from "./Temp_Line";
export function Lines_Container({
  lines,
  arr,
  buttonRefs,
  deleteLine,
  currentFrom,
  mousePos,
}: {
  lines: typeLine[];
  arr: (CardType & { side: "left" | "right" })[];
  buttonRefs: Record<number, HTMLButtonElement | null>;
  deleteLine: (id: number) => void;
  currentFrom: number | null;
  mousePos: { x: number; y: number } | null;
}) {


  return (
    <svg className={styles.container__line}>
      {lines.map((line) => (
        <Line_Connect
          key={line.id}
          line={line}
          arr={arr}
          buttonRefs={buttonRefs}
          onDelete={deleteLine}
        />
      ))}

      {currentFrom !== null && mousePos && (
        <Temp_Line
          fromId={currentFrom}
          mousePos={mousePos}
          arr={arr}
          buttonRefs={buttonRefs}
        />
      )}
    </svg>
  );
}
