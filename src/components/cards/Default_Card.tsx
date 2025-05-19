"use client";

import { useDropdown } from "@/features/hooks/useDropdown";

type CardData = {
  id: number;
  catId: number;
  name: string;
  intlName: string;
  description: string;
  intlDescription: string;
  inBasket: boolean;
  isUserCard: boolean;
};

export default function Default_Card({ data }: { data: CardData }) {
  const { isOpen, toggle, dropdownRef } = useDropdown();

  return (
    <div
      ref={dropdownRef}
      className={`relative p-[6px_12px] h-full cursor-pointer`}
    >
      <div onClick={toggle} className={`flex flex-col  h-full select-none`}>
        <div className="flex flex-col">
          <h5 className={`text-center text-[22px] font-[700] text-blue-700`}>
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
          <p className={`text-[12px] font-[500] text-indigo-600`}>
            {data.description}
          </p>{" "}
          <p className={`text-[12px] font-[500] text-indigo-600 text-center`}>
            -------------------------
          </p>
          <p className={`text-[12px] font-[500] text-indigo-600`}>
            {data.intlDescription}
          </p>
        </div>{" "}
      </div>

      <div
      onClick={(e) => {e.stopPropagation(); toggle()}}
        className={`duration-300 ease-in-out transition-all w-0 h-0 absolute top-0 left-0 z-[1] backdrop-blur-sm flex flex-col items-center justify-center gap-[4px]  ${
          isOpen && `!w-full !h-full `
        }`}
      >
        {isOpen && (
          <>
            <button onClick={(e) => {e.stopPropagation()}}
              className={`duration-300 ease-in-out transition-all w-full  p-[4px] text-[12px] font-[700] text-red-600 bg-white/30 cursor-pointer hover:bg-red-600 hover:text-white`}
            >
              Заблокировать
            </button>
            <button
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
