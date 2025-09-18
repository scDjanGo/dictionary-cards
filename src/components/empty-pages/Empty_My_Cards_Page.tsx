"use client";

import Arrow_Button_SVG from "@/UI/svgs/Arrow_Button_SVG";
import { useRouter } from "next/navigation";

export default function Empty_My_Cards_Page() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/create-card");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-semibold text-blueCl dark:text-bgLight text-center">
          Пусто
        </h2>

        <button
          onClick={handleBack}
          className="flex items-center space-x-2 border bg-blueCl dark:bg-bgItem text-bgLight border-blueCl dark:border-bgLight  px-4 py-2 rounded-md transition-colors duration-200  "
        >
          <span>Добавить карточку</span>
          {/* Стрелка (развёрнутая) */}
          <Arrow_Button_SVG classColor="!stroke-bgLight" className="rotate-180" />
        </button>
      </div>
    </div>
  );
}
