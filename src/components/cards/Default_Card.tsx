"use client";

import { useDropdown } from "@/features/hooks/useDropdown";
import { CardType } from "@/lib/types/types";
import Three_Dots_Button from "@/UI/buttons/card/Three_Dots_Button";
import Delete_My_Card from "@/UI/buttons/card/Delete_My_Card";
import To_Basket_Cards from "@/UI/buttons/card/To_Basket_Cards";
import Back_To_Stack_Card from "@/UI/buttons/card/Back_To_Stack_Card";

export default function Default_Card({ data }: { data: CardType }) {
  const { isOpen, toggle, dropdownRef } = useDropdown();

  return (
    <div
      ref={dropdownRef}
      className={`relative p-[6px_12px] h-full cursor-pointer`}
    >
      <Three_Dots_Button onClick={toggle} />

      <div className={`flex flex-col  h-full select-none`}>
        <div className="flex flex-col">
          <h5 className={`text-center text-[22px] font-[700] text-blueCl`}>
            {data.name}
          </h5>
          <h6 className={`text-center text-[16px] font-[500] text-blue-600`}>
            {data.intlName}
          </h6>
        </div>
        <span
          className={`text-[12px] font-[500] text-indigo-600 text-center translate-y-[-10px]`}
        >
          ___________________
        </span>
        <div className="flex flex-col">
          <p className={`text-[12px] font-[500] text-indigo-600 min-h-[18px]`}>
            {data.description}
          </p>{" "}
          <p className={`text-[12px] font-[500] text-indigo-600 text-center`}>
            -------------------------
          </p>
          <p className={`text-[12px] font-[500] text-indigo-600 min-h-[18px]`}>
            {data.intlDescription}
          </p>
        </div>{" "}
      </div>

      <div
        onClick={(e) => {
          toggle();
          e.stopPropagation();
        }}
        className={`duration-300 ease-in-out transition-all !w-full h-0 absolute top-0 left-0 z-[1] backdrop-blur-sm flex flex-col items-center opacity-0 justify-center gap-[4px]  ${
          isOpen && ` !h-full opacity-100`
        }`}
      >
        {isOpen && (
          <>
            {data.inBasket && <Back_To_Stack_Card card={data} />}
            {!data.inBasket && <To_Basket_Cards card={data} />}

            {data.isUserCard && <Delete_My_Card id={data.id} />}

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              className={`duration-300 ease-in-out transition-all w-full  p-[4px] text-[12px] font-[700] text-indigo-600 bg-white/30 cursor-pointer hover:bg-indigo-600 hover:text-white`}
            >
              Свернуть
            </button>
          </>
        )}
      </div>
    </div>
  );
}
