"use client";

import { Button, IconButton } from "@mui/material";
import { useParams, usePathname } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { CategoryType } from "@/lib/types/types";

export default function Category_Name() {
  const [userCat, setUserCat] = useState<CategoryType | null>(null);
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

  return (
    userCat && (
      <div className={`flex items-center gap-[12px] max-w-[206px]`}>
        <h2
          className={`flex items-center space-x-2 text-2xl font-bold text-[#1976D2] hover:underline cursor-pointer line-clamp-1 text-nowrap`}
        >
          {userCat.name} - {userCat.intlName}
        </h2>
        <IconButton
          href="/change-category"
          onClick={handleChange}
          aria-label="Редактировать"
          sx={{ color: "#1976D2" }}
        >
          <EditIcon />
        </IconButton>
      </div>
    )
  );
}
