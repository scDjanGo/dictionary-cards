"use client";

import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Floating_Input from "@/UI/input/Floating_Input";
import Floating_Select from "@/UI/input/Floating_Select";

export default function CreateCardForm() {
  const [formData, setFormData] = useState({
    name: "",
    intlName: "",
    description: "",
    intlDescription: "",
    catId: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    intlName: false,
    description: false,
    intlDescription: false,
    catId: false,
  });

  const [userCategories, setUserCategories] = useState<any[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCategories = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );
    setUserCategories(storedCategories);

    // Устанавливаем последнюю категорию по умолчанию, если они есть
    if (storedCategories.length > 0) {
      setFormData((prev) => ({
        ...prev,
        catId: storedCategories[0].id.toString(),
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

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
      description: false, // Необязательное поле
      intlDescription: false, // Необязательное поле
      catId: formData.catId === "",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((val) => val)) return;

    const myCards = JSON.parse(localStorage.getItem("my-cards") || "[]");

    const minId =
      myCards.length > 0 ? Math.min(...myCards.map((card: any) => card.id)) : 0;

    const newId = minId <= 0 ? minId - 1 : -1;

    const newCard = {
      id: newId,
      catId: parseInt(formData.catId),
      name: formData.name,
      intlName: formData.intlName,
      description: formData.description,
      intlDescription: formData.intlDescription,
      inBasket: false,
      isUserCard: true,
    };

    myCards.unshift(newCard);
    localStorage.setItem("my-cards", JSON.stringify(myCards));

    setOpenDialog(true);
  };

  const handleCreateAnother = () => {
    setFormData({
      name: "",
      intlName: "",
      description: "",
      intlDescription: "",
      catId:
        userCategories.length > 0
          ? userCategories[userCategories.length - 1].id.toString()
          : "",
    });
    setOpenDialog(false);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-10 p-6 bg-bgLight dark:bg-bgItem shadow-lg rounded-xl space-y-6 flex flex-col gap-[12px]"
      >
        <Typography
          variant="h5"
          className="text-center font-bold mb-4 text-blueCl dark:text-bgLight "
        >
          Create card <br />
          ------- <br />
          Создание карточки
        </Typography>

        <Floating_Input
          label={"Name (EN) *"}
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name ? "Required field" : ""}
        />

        <Floating_Input
          label={"Название (RU) *"}
          name="intlName"
          value={formData.intlName}
          onChange={handleChange}
          error={!!errors.intlName}
          helperText={errors.intlName ? "Обязательное поле" : ""}
        />

        <Floating_Input
          label={"Description (EN) - optional"}
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description ? "Required field" : ""}
        />

        <Floating_Input
          label={"Описание (RU) - необязательно"}
          name="intlDescription"
          value={formData.intlDescription}
          onChange={handleChange}
          error={!!errors.intlDescription}
          helperText={errors.intlDescription ? "Обязательное поле" : ""}
        />

        <Floating_Select
          handleChange={handleChange}
          formData={formData}
          items={userCategories}
          errors={errors}
        />

        <button
          type="submit"
          className="my-transform text-bgLight bg-blueCl hover:bg-blueCl/90 dark:bg-bgItem dark:hover:bg-bgDark dark:border-[1px] dark:border-bgLight rounded-[4px] p-[12px_12px]  text-[16px]"
        >
          CREATE / СОЗДАТЬ
        </button>
      </form>

      <Link
        href="/create-category"
        className="inline-block text-blueCl dark:text-bgLight text-sm font-medium hover:underline transition-colors duration-200 mt-[12px]"
      >
        Create category / Создать категорию
      </Link>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ textAlign: "center", pt: 4 }}>
          <CheckCircleOutlineIcon
            color="success"
            sx={{ fontSize: 50, mb: 1 }}
          />
          <Typography variant="h6" component="div">
            Карточка создана!
          </Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText sx={{ textAlign: "center" }}>
            Создать ещё одну карточку?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button onClick={handleCreateAnother} variant="outlined">
            Да
          </Button>
          <Button
            onClick={handleGoBack}
            variant="contained"
            sx={{
              backgroundColor: "#1976D2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
