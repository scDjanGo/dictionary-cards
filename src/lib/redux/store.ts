
import { configureStore } from "@reduxjs/toolkit";

import currentCardsSlice from "@/lib/redux/slices/currentCardsSlice/currentCardsSlice";
import testConfigurationSlice from "@/lib/redux/slices/testConfigurationSlice/testConfigurationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      currentCardsSlice,
      testConfigurationSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
