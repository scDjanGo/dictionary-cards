import { CardType } from "@/lib/types/types";

/* === Вспомогательная функция === */
export const getConnect = (
  id: number,
  arr: (CardType & { side: "left" | "right" })[],
  buttonRefs: Record<number, HTMLButtonElement | null>
) => {
  const el = buttonRefs[id];
  const item = arr.find((i) => i.id === id);
  if (!el || !item) return { x: 0, y: 0 };

  const rect = el.getBoundingClientRect();
  const y = rect.top + rect.height / 2;

  if (item.side === "left") {
    return { x: rect.right, y };
  } else {
    return { x: rect.left, y };
  }
};
