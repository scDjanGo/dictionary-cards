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



// type of card
export type typeViewCards = "card" | "table"



// Quiz types
export type QuizSettingsType = {
  language: "ru" | "en";
  time: boolean;
  type: "swipe" | "write" | "speech";
  random: boolean;
};


// ui modal
export type typeUiModals = {
  value: "save-cards" | "create-another-card" | "current-card"
  state: boolean;
};




// sidebar
export type typeSidebars = {
  value: "main-sidebar";
  state: boolean;
};
