"use client";

import Container_Modals from "@/components/containers/Container_Modals";
import { useCurrentCategory, useUiModalsStore } from "@/lib/zustand";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { CardType, CategoryType } from "@/lib/types/types";

export default function Delete_Category_Modal() {
  const router = useRouter();
  const currentCategory = useCurrentCategory((state) => state.currentCategory);
  const offModal = useUiModalsStore((state) => state.offUiModalsStore);

  const handleModalOff = () => {
    offModal();
  };

  const handleDelete = () => {
    const userCategories: CategoryType[] = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );

    if (!userCategories.length) {
      router.push("/my-cards");
      handleModalOff();
      return;
    }

    const currentCategoryIndex = userCategories.findIndex(
      (item) => item.id === Number(currentCategory?.id)
    );
    const userCards: CardType[] = JSON.parse(
      localStorage.getItem("my-cards") || "[]"
    );

    const filteredCards = userCards.filter(
      (item) => item.catId !== currentCategory?.id
    );


    userCategories.splice(currentCategoryIndex, 1);

    localStorage.setItem("my-categories", JSON.stringify(userCategories));
    localStorage.setItem("my-cards", JSON.stringify(filteredCards))

    router.push("/my-cards");
    handleModalOff();
  };

  return (
    <Container_Modals>
      <div className="bg-bgLight dark:bg-bgItem  rounded-2xl shadow-lg max-w-sm w-full p-6 animate-fadeIn">
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="text-red-500 w-12 h-12 mb-2" />
          <h2 className="text-lg font-semibold text-blueCl dark:text-bgLight">
            Удаление категории!
          </h2>
        </div>

        <p className="text-center text-blueCl dark:text-bgLight mt-4">
          При удалении категории, удалятся все карточки этой категории !!!
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition dark:border-bgLight text-blueCl dark:text-bgLight dark:bg-bgDark dark:hover:bg-bgItem"
          >
            Удалить
          </button>
          <button
            onClick={() => {
              handleModalOff();
            }}
            className="px-4 py-2 rounded-lg bg-blueCl text-bgLight dark:text-bgLight  dark:border-[1px] dark:border-bgLight dark:bg-bgDark  dark:hover:bg-bgItem transition"
          >
            Отмена
          </button>
        </div>
      </div>
    </Container_Modals>
  );
}
