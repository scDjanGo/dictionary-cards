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
  type: "swipe" | "write" | "speak";
  random: boolean
}