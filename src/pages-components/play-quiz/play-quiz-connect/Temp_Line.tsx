/* === The temp line === */

import { CardType } from "@/lib/types/types";
import { getConnect } from "@/features/features/get-connect";
import { CIRCLE_RADIUS, STROKE_WIDTH } from "@/lib/settings/data";

export function Temp_Line({
  fromId,
  mousePos,
  arr,
  buttonRefs,
}: {
  fromId: number;
  mousePos: { x: number; y: number };
  arr: (CardType & { side: "left" | "right" })[];
  buttonRefs: Record<number, HTMLButtonElement | null>;
}) {
  const from = getConnect(fromId, arr, buttonRefs);

  return (
    <g>
      <line
        x1={from.x}
        y1={from.y}
        x2={mousePos.x}
        y2={mousePos.y}
        strokeWidth={STROKE_WIDTH}
        strokeDasharray="4 2"
        className="stroke-blueCl dark:stroke-bgLight"
      />
      <circle
        className="fill-blueCl dark:fill-bgLight"
        cx={from.x}
        cy={from.y}
        r={CIRCLE_RADIUS}
      />
    </g>
  );
}
