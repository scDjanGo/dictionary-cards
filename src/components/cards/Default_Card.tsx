import Back_To_Stack_Card from "@/UI/buttons/card/Back_To_Stack_Card";
import Delete_My_Card from "@/UI/buttons/card/Delete_My_Card";
import Three_Dots_Button from "@/UI/buttons/card/Three_Dots_Button";
import To_Basket_Cards from "@/UI/buttons/card/To_Basket_Cards";
import { useState } from "react";

export type CardType = {
  id: number;
  catId: number;
  name: string;
  intlName: string;
  description: string;
  intlDescription: string;
  inBasket: boolean;
  isUserCard: boolean;
};

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
      className="w-80 h-52 cursor-pointer perspective"
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
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 p-6 flex flex-col justify-between border border-blue-200/50">
          <div>
            <h2 className="text-xl font-bold text-gray-800 drop-shadow-sm">
              {data.name}
            </h2>
            <p className="text-sm text-gray-600 italic">{data.intlName}</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-700 text-sm leading-snug line-clamp-2">
              {data.description}
            </p>
            <p className="text-gray-500 text-xs mt-1">{data.intlDescription}</p>
          </div>
          <div className="mt-3 text-xs text-gray-400 italic">
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
    <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-xl bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-300 p-6 flex flex-col justify-center items-center border border-purple-200/50">
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
