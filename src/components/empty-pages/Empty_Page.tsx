"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Arrow_Button_SVG from "@/UI/svgs/Arrow_Button_SVG";

export default function Empty_Page() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/cards");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-2xl font-semibold text-blueCl dark:text-bgLight text-center">
          Пусто
        </h2>

        <button
          onClick={handleBack}
          className="flex items-center space-x-2 border bg-blueCl dark:bg-bgItem text-bgLight border-blueCl dark:border-bgLight  px-4 py-2 rounded-md transition-colors duration-200  "
        >
          <Arrow_Button_SVG classColor="!stroke-bgLight" />
          <span>Назад</span>
        </button>
      </div>
    </div>
  );
}
