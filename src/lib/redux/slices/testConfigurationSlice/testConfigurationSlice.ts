import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { value: null } = {
  value: null,
};

const testConfigurationSlice = createSlice({
  name: "testConfigurationSlice",
  initialState,
  reducers: {},
});

export const {} = testConfigurationSlice.actions;
export default testConfigurationSlice.reducer;
