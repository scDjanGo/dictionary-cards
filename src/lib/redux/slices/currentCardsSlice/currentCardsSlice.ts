import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "@/lib/types/types";

const initialState: { value: CardType[] } = { value: [] };

const currentCardsSlice = createSlice({
  name: "currentCardsSlice",
  initialState,
  reducers: {
    setCurrentCards: (state, action: PayloadAction<CardType[]>) => {
      state.value = action.payload;
    },
    removeCardFromState: (state, action: PayloadAction<number>) => {
      state.value = [
        ...state.value.filter((item) => item.id !== action.payload),
      ];
    },
  },
});

export const { setCurrentCards, removeCardFromState } =
  currentCardsSlice.actions;
export default currentCardsSlice.reducer;
