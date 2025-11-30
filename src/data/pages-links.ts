import { typeSidebarLink } from "@/lib/types/types";
import { PREPOSITIONS } from "./prepositions";
import { TENSE } from "./tense";
import { CONDITIONALS } from "./conditionals";

export const PAGES_LINKS: typeSidebarLink[] = [
  { id: 1, link: "/", name_ru: "Главная", name_en: "Home", childItems: [] },
  {
    id: 2,
    link: "/cards",
    name_ru: "Карточки",
    name_en: "Cards",
    childItems: [
      {
        id: 1,
        link: "/my-cards",
        name_ru: "Мои карточки",
        name_en: "My cards",
        childItems: [],
      },
      {
        id: 2,
        link: "/create-card",
        name_ru: "Создать карточку",
        name_en: "Create card",
        childItems: [],
      },
      {
        id: 3,
        link: "/create-category",
        name_ru: "Создать категорию",
        name_en: "Create category",
        childItems: [],
      },
      {
        id: 4,
        link: "/blocked-cards",
        name_ru: "Заблокированные",
        name_en: "Blocked cards",
        childItems: [],
      },
    ],
  },
  {
    id: 3,
    link: "/tense",
    name_ru: "Времена",
    name_en: "Times",
    childItems: TENSE,
  },
  {
    id: 4,
    link: "/prepositions",
    name_ru: "Предлоги",
    name_en: "Prepositions",
    childItems: PREPOSITIONS,
  },
  {
    id: 5,
    link: "/conditionals",
    name_ru: "Условные предложения",
    name_en: "Conditional sentences",
    childItems: CONDITIONALS,
  },
  {
    id: 6,
    link: "/modal-verbs",
    name_ru: "Модальные глаголы",
    name_en: "Modal verbs",
    childItems: [],
  },
  {
    id: 7,
    link: "/passive-voice",
    name_ru: "Пассивный Залог",
    name_en: "Passive Voice",
    childItems: [],
  },
];
