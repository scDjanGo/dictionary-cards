export type CategoryType = {
  id: number;
  name: string;
  intlName: string;
  createData?: string;
  childCategories?: any[]
};

export type CardType = {
  id: number;
  catId: number;
  name: string;
  intlName: string;
  description: string;
  intlDescription: string;
  inBasket: boolean;
  isUserCard: boolean;
};

export type QuizSettingsType = {
  language: "ru" | "en";
  time: boolean;
  type: "swipe" | "write" | "speech";
  random: boolean;
};

export type typeUiModals = {
  value: "save-cards";
  state: boolean;
};

export type typeSidebars = {
  value: "main-sidebar";
  state: boolean;
};
