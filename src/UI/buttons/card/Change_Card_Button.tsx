"use client";

import Link from "next/link";

type ButtonProps = {
  id: number;
};

export default function Change_My_Card({ id }: ButtonProps) {
  return (
    <Link
      href={`/create-card/${id}`}
      className="text-center duration-300 ease-in-out transition-all w-full p-[4px] text-[12px] font-bold text-bgLight bg-white/30 cursor-pointer hover:bg-blueCl hover:text-white rounded-[6px]"
    >
      Изменить
    </Link>
  );
}
