import { typeSidebarLink } from "@/lib/types/types";
import { PREPOSITIONS } from "./prepositions";
import { TENSE } from "./tense";
import { CONDITIONALS } from "./conditionals";



// Icons
import Cards_SVG from "@/UI/svgs/sidebar/Cards_SVG";
import Tense_SVG from "@/UI/svgs/sidebar/Tense_SVG";
import Prepositions_SVG from "@/UI/svgs/sidebar/Prepositions_SVG";
import Passive_Voice_SVG from "@/UI/svgs/sidebar/Passive_Voice_SVG";
import Conditional_SVG from "@/UI/svgs/sidebar/Conditional_SVG";
import Modal_Verbs_SVG from "@/UI/svgs/sidebar/Modal_Verbs_SVG";

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
    icon: Cards_SVG
  },
  {
    id: 3,
    link: "/tense",
    name_ru: "Времена",
    name_en: "Tense",
    childItems: TENSE,
    icon: Tense_SVG
  },
  {
    id: 4,
    link: "/prepositions",
    name_ru: "Предлоги",
    name_en: "Prepositions",
    childItems: PREPOSITIONS,
    icon: Prepositions_SVG
  },
  {
    id: 5,
    link: "/conditionals",
    name_ru: "Условные предложения",
    name_en: "Conditional sentences",
    childItems: CONDITIONALS,
    icon: Conditional_SVG
  },
  {
    id: 6,
    link: "/modal-verbs",
    name_ru: "Модальные глаголы",
    name_en: "Modal verbs",
    childItems: [],
    icon: Modal_Verbs_SVG
  },
  {
    id: 7,
    link: "/passive-voice",
    name_ru: "Пассивный Залог",
    name_en: "Passive Voice",
    childItems: [],
    icon: Passive_Voice_SVG
  },
];
