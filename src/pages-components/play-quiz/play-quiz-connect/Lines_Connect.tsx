/* === Line component === */
import { typeLine, CardType } from "@/lib/types/types";
import styles from "../../../styles/quiz/quiz-connect/line.module.css";

import { getConnect } from "@/features/features/get-connect";
import { CIRCLE_RADIUS, STROKE_WIDTH } from "@/lib/settings/data";

export default function Line_Connect({
  line,
  arr,
  buttonRefs,
  onDelete,
}: {
  line: typeLine;
  arr: (CardType & { side: "left" | "right" })[];
  buttonRefs: Record<number, HTMLButtonElement | null>;
  onDelete: (id: number) => void;
}) {
  const from = getConnect(line.fromId, arr, buttonRefs);
  const to = getConnect(line.toId, arr, buttonRefs);
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  return (
    <g>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        className="stroke-blueCl dark:stroke-bgLight"
        strokeWidth={STROKE_WIDTH}
        strokeDasharray={"4 2"}
      />
      <circle className="fill-blueCl dark:fill-bgLight" cx={from.x} cy={from.y} r={CIRCLE_RADIUS} fill="black" />
      <circle className="fill-blueCl dark:fill-bgLight" cx={to.x} cy={to.y} r={CIRCLE_RADIUS} fill="black" />

      <foreignObject
        x={midX - 10}
        y={midY - 10}
        width={20}
        height={20}
        className={styles.pointer__events}
      >
        <button
          onClick={() => onDelete(line.id)}
          className={styles.delete__button}
        >
          ×
        </button>
      </foreignObject>
    </g>
  );
}
