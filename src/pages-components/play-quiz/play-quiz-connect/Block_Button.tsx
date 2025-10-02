import styles from "../../../styles/quiz/quiz-connect/block.module.css";
import { CardType } from "@/lib/types/types";

type typeItem = { id: number; name: string; description: string };

export default function Block_Button({
  item,
  onStart,
  buttonRefs,
}: {
  item: typeItem;
  onStart: (id: number) => void;
  buttonRefs: Record<number, HTMLButtonElement | null>;
}) {
  return (
    <button
      // style={{
      //   border: isUsed ? "1px solid #10982E" : "1px solid white",
      //   backgroundColor: isUsed ? "#D3E8D9" : "#EDEDED",
      // }}
      ref={(el) => (buttonRefs[item.id] = el) as any}
      className={`${styles.block__button} text-center border-[1px] border-blueCl dark:border-bgLight`}
      onMouseDown={() => onStart(item.id)}
      onTouchStart={() => onStart(item.id)}
    >
      <p className=" text-center text-blueCl dark:text-bgLight break-all  ">
        {item.name}
      </p>
      <p className="text-[10px] text-center  text-blueCl dark:text-bgLight " >{item.description}</p>
    </button>
  );
}
