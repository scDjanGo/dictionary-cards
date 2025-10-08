"use client";

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CategoryType } from "@/lib/types/types";
import Edit_SVG from "@/UI/svgs/Edit_SVG";
import Delete_SVG from "@/UI/svgs/Delete_SVG";
import Link from "next/link";
import { useCurrentCategory, useUiModalsStore } from "@/lib/zustand";

export default function Category_Name() {
  const currentCategory = useCurrentCategory(state => state.currentCategory)
  const [userCat, setUserCat] = useState<CategoryType | null>(null);
  const setModal = useUiModalsStore((state) => state.setUiModalsStore);
  const setCurrentCategory = useCurrentCategory(
    (state) => state.setCurrentCategory
  );
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    if (!params?.category) {
      setUserCat(null);
      return;
    }

    if (Number(params.category) > 0) {
      setUserCat(null);
      return;
    }
    const categories: CategoryType[] | "" = JSON.parse(
      localStorage.getItem("my-categories") || ""
    );

    if (!categories) return;

    const current = categories.find(
      (item) => item.id === Number(params.category)
    );

    if (!current) return;
    setUserCat(current);
  }, [params, pathname]);

  const handleChange = () => {
    sessionStorage.setItem("change-category", JSON.stringify(userCat));
  };

  const handleDelete = () => {
    setCurrentCategory(userCat);
    setModal("delete-category");
  };

  return (
    userCat && (
      <div className={`flex items-center gap-[12px] max-w-[206px]`}>
        <h2
          className={`flex items-center space-x-2 text-2xl font-bold text-blueCl dark:text-bgLight hover:underline cursor-pointer line-clamp-1 text-nowrap max-695px:text-[18px]`}
        >
          {userCat.name} - {userCat.intlName}
        </h2>
        <Link
          aria-label="Редактировать"
          href={`/change-category`}
          onClick={handleChange}
        >
          <Edit_SVG />
        </Link>

        <button  onClick={handleDelete} aria-label="Удалить" className={`${!currentCategory?.id && "hidden"}`}>
          <Delete_SVG />
        </button>
      </div>
    )
  );
}
