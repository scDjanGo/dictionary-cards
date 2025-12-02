"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Floating_Input from "@/UI/input/Floating_Input";
import Floating_Select from "@/UI/input/Floating_Select";
import { useUiModalsStore } from "@/lib/zustand";
import { useParams, useRouter } from "next/navigation";
import { CardType } from "@/lib/types/types";

export default function Change_Card_Form() {
  const { id } = useParams();
  const router = useRouter();
  const uiModal = useUiModalsStore((state) => state.uiModalsStore);
  const onModal = useUiModalsStore((state) => state.setUiModalsStore);
  const [userCategories, setUserCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    id: 0,
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

  useEffect(() => {
    const storedCategories = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );
    setUserCategories(storedCategories);

    if (storedCategories.length > 0) {
      setFormData((prev) => ({
        ...prev,
        catId: storedCategories[0].id.toString(),
      }));
    }
  }, []);

  useEffect(() => {
    if (!uiModal) return;
    setFormData((prev) => ({
      ...prev,
      name: "",
      intlName: "",
      description: "",
      intlDescription: "",
    }));
  }, [uiModal]);

  useEffect(() => {
    const currentCard = JSON.parse(
      localStorage.getItem("my-cards") || "[]"
    ).find((item: CardType) => item.id === Number(id));

    if (!currentCard) {
      alert("Карточка с таким значением не существует");
      router.push("/cards");
      return;
    }

    setFormData(currentCard);
  }, [id]);

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
      description: false,
      intlDescription: false,
      catId: formData.catId === "",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((val) => val)) return;

    const myCards: CardType[] = JSON.parse(
      localStorage.getItem("my-cards") || "[]"
    );

    const newCard = {
      id: formData.id,
      catId: parseInt(formData.catId),
      name: formData.name,
      intlName: formData.intlName,
      description: formData.description,
      intlDescription: formData.intlDescription,
      inBasket: false,
      isUserCard: true,
    };

    const OldCardIndex = myCards.findIndex((item) => item.id === newCard.id);

    myCards.splice(OldCardIndex, 1, newCard);

    localStorage.setItem("my-cards", JSON.stringify(myCards));

    onModal("change-card-successfully");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-10 p-6 bg-bgLight dark:bg-bgItem shadow-lg rounded-xl space-y-6 flex flex-col gap-[12px]"
      >
        <h1
          className="text-center font-bold mb-4 text-blueCl dark:text-bgLight "
        >
          Change card <br />
          ------- <br />
          Изменени карточки
        </h1>

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
          CHANGE / Изменить
        </button>
      </form>

      <Link
        href="/create-category"
        className="inline-block text-blueCl dark:text-bgLight text-sm font-medium hover:underline transition-colors duration-200 mt-[12px]"
      >
        Create category / Создать категорию
      </Link>
    </>
  );
}
