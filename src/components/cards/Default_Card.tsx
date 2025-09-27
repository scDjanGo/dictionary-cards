import Back_To_Stack_Card from "@/UI/buttons/card/Back_To_Stack_Card";
import Delete_My_Card from "@/UI/buttons/card/Delete_My_Card";
import To_Basket_Cards from "@/UI/buttons/card/To_Basket_Cards";
import { useState } from "react";
import { CardType } from "@/lib/types/types";


type Props = {
  data: CardType;
};

const Default_Card: React.FC<Props> = ({ data }) => {
  const [flipped, setFlipped] = useState(false);

  const handleToggle = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className="w-full min-h-52 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleToggle();
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="relative w-full h-full backface-hidden rounded-2xl shadow-xl   p-6 flex flex-col gap-[12px] justify-between bg-blueCl dark:bg-bgItem ">
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-center text-xl font-bold text-bgLight drop-shadow-sm border-b-[1px] border-dashed ">
              {data.name}
            </h2>
            <p className="text-center text-sm text-bgLight">{data.intlName}</p>
          </div>
          <div className="mt-2">
            <p className="text-bgLight text-sm leading-snug line-clamp-2 border-b-[1px] border-dashed ">
              {data.description}
            </p>
            <p className="text-bgLight/80 text-xs mt-1">
              {data.intlDescription}
            </p>
          </div>
          <div className=" text-xs text-gray-400">
            Нажмите, чтобы перевернуть
          </div>
        </div>

        {/* Back Side */}
        <BackSided_Card data={data} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Default_Card;

const BackSided_Card = ({
  data,
  handleToggle,
}: {
  data: CardType;
  handleToggle: () => void;
}) => {
  return (
    <div className="absolute top-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-xl bg-gradient-to-br dark:bg-gradient-none from-violet-200 dark:from-0% via-purple-300 dark:via-0% to-fuchsia-300 dark:to-0% p-6 flex flex-col justify-center items-center border border-purple-200/50 dark:!bg-bgItem dark:!border-none">
      <p className="text-gray-800 font-semibold mb-5 text-lg drop-shadow-sm">
        Что сделать?
      </p>

      <div className="flex flex-col gap-[6px] w-full">
        {data.inBasket ? (
          <Back_To_Stack_Card card={data} />
        ) : (
          <To_Basket_Cards card={data} />
        )}

        {data.isUserCard && <Delete_My_Card id={data.id} />}

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          className="text-center duration-300 ease-in-out transition-all w-full p-[4px] text-[12px] font-bold text-blueCl bg-white/30 cursor-pointer hover:bg-blueCl hover:text-white rounded-[6px]"
        >
          Перевернуть
        </button>
      </div>
    </div>
  );
};
