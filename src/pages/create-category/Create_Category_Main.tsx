"use client";

import { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Create_Category_Main() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });
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
      email: formData.email.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email) return;

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
      intlName: formData.email,
      createDate: Date.now(),
    };

    myCategories.unshift(newCategory);

    localStorage.setItem("my-categories", JSON.stringify(myCategories));
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
          Add / Добавить
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
          Category added! <br />
          Категория добавлено!
        </Alert>
      </Snackbar>
    </>
  );
}
