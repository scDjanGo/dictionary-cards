"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/lib/types/types";
import Floating_Input from "@/UI/input/Floating_Input";

export default function Change_Category_Main() {
  const [formData, setFormData] = useState({ name: "", intlName: "" });
  const [currentCat, setCurrentCat] = useState<null | CategoryType>(null);
  const [errors, setErrors] = useState({ name: false, intlName: false });
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const current = JSON.parse(sessionStorage.getItem("change-category") || "");
    if (!current) {
      window.history.length > 1 ? router.back() : router.push("my-cards");

      return;
    }

    setFormData(() => ({ name: current.name, intlName: current.intlName }));
    setCurrentCat(current);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Убираем ошибку при вводе
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCat) return;

    const newErrors = {
      name: formData.name.trim() === "",
      intlName: formData.intlName.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.intlName) return;

    const myCategories: any[] = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );

    const newCategories = myCategories.filter(
      (item) => item.id !== currentCat.id
    );

    newCategories.unshift({
      ...currentCat,
      name: formData.name,
      intlName: formData.intlName,
    });
    localStorage.setItem("my-categories", JSON.stringify(newCategories));
    setOpen(true);
    router.back();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-bgLight dark:bg-bgItem shadow-md rounded-lg flex flex-col gap-4"
      >
        <Floating_Input
          label={"Category name (en)"}
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name ? "Required field" : ""}
        />

        <Floating_Input
          label={"Название категории (ру)"}
          name="intlName"
          value={formData.intlName}
          onChange={handleChange}
          error={!!errors.intlName}
          helperText={errors.intlName ? "Обязательное поле" : ""}
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors dark:bg-bgItem dark:border-[1px] dark:hover:bg-bgDark"
        >
          Change / Изменить
        </button>
      </form>

      {/* Snackbar */}
      {open && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-center">
          <p>Category changed!</p>
          <p>Категория изменена!</p>
        </div>
      )}
    </>
  );
}
