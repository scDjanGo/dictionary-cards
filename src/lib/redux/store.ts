// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import currentCardsSlice from "@/lib/redux/slices/currentCardsSlice/currentCardsSlice"
import testConfigurationSlice from '@/lib/redux/slices/testConfigurationSlice/testConfigurationSlice'

export const store = configureStore({
  reducer: {
    currentCardsSlice,
    testConfigurationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
