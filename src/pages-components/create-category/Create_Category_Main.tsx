"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Floating_Input from "@/UI/input/Floating_Input";

export default function Create_Category_Main() {
  const [formData, setFormData] = useState({ name: "", intlName: "" });
  const [errors, setErrors] = useState({ name: false, intlName: false });
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

    const newErrors = {
      name: formData.name.trim() === "",
      intlName: formData.intlName.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.intlName) return;

    const myCategories: any[] = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );

    let minId =
      myCategories.length > 0
        ? Math.min(...myCategories.map((cat) => cat.id))
        : 0;

    const newId = minId - 1;

    const newCategory = {
      id: newId,
      name: formData.name,
      intlName: formData.intlName,
      createDate: Date.now(),
    };

    myCategories.unshift(newCategory);

    localStorage.setItem("my-categories", JSON.stringify(myCategories));
    setOpen(true);
    router.back();
  };

  return (
    <div className="relative">
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

        <button
          type="submit"
          className="w-full bg-blueCl dark:bg-bgItem hover:bg-[#125ea6] dark:border-[1px] dark:hover:bg-bgDark  text-white py-2 rounded-md transition"
        >
          Add / Добавить
        </button>
      </form>

      {/* Snackbar */}
      {/* {open && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-3 rounded-md shadow-lg text-center transition-opacity">
          <div>
            Category added!
            <br />
            Категория добавлено!
          </div>
          <button
            className="absolute top-1 right-2 text-white opacity-90"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
      )} */}
    </div>
  );
}
