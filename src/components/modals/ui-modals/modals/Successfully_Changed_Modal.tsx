"use client";

import Container_Modals from "@/components/containers/Container_Modals";
import { useUiModalsStore } from "@/lib/zustand";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Successfully_Changed_Modal() {
  const router = useRouter();
  const offModal = useUiModalsStore((state) => state.offUiModalsStore);

  const handleModalOff = () => {
    offModal();
  };

  return (
    <Container_Modals>
      <div className="bg-bgLight dark:bg-bgItem  rounded-2xl shadow-lg max-w-sm w-full p-6 animate-fadeIn">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="text-blueCl dark:text-bgLight w-12 h-12 mb-2" />
          <h2 className="text-lg font-semibold text-blueCl dark:text-bgLight">
            Карточка успешно изменено!
          </h2>
        </div>

        {/* <p className="text-center text-blueCl dark:text-bgLight mt-4">
          Карточка успешно изменено
        </p> */}

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => {
              handleModalOff();
              router.back();
            }}
            className="px-4 py-2 rounded-lg bg-blueCl text-bgLight dark:text-bgLight  dark:border-[1px] dark:border-bgLight dark:bg-bgDark  dark:hover:bg-bgItem transition"
          >
            К карточкам
          </button>
        </div>
      </div>
    </Container_Modals>
  );
}
