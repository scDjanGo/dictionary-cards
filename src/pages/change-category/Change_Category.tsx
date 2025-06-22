"use client";

import { useEffect, useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/lib/types/types";

export default function Change_Category_Main() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [currentCat, setCurrentCat] = useState<null | CategoryType>(null);
  const [errors, setErrors] = useState({ name: false, email: false });
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const current = JSON.parse(sessionStorage.getItem("change-category") || "");
    if (!current) {
      window.history.length > 1 ? router.back() : router.push("my-cards");

      return;
    }

    setFormData(() => ({ name: current.name, email: current.intlName }));
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
      email: formData.email.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email) return;

    const myCategories: any[] = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );

    const newCategories = myCategories.filter(
      (item) => item.id !== currentCat.id
    );

    newCategories.unshift({
      ...currentCat,
      name: formData.name,
      intlName: formData.email,
    });
    localStorage.setItem("my-categories", JSON.stringify(newCategories));
    setOpen(true);
    router.back();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-6 flex flex-col gap-[16px]"
      >
        <TextField
          fullWidth
          label="Category name (en)"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? "Required field" : ""}
          className="focus:outline-none"
        />

        <TextField
          fullWidth
          label="Название категории (ру)"
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? "Обязательное поле" : ""}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1976D2",
            "&:hover": { backgroundColor: "#125ea6" },
          }}
          className="w-full"
        >
          Change / Изменить
        </Button>
      </form>{" "}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Category changed! <br />
          Категория изменена!
        </Alert>
      </Snackbar>
    </>
  );
}
