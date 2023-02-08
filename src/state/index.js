import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      let currState = state.mode === "light" ? "dark" : "light";
      state.mode = currState;
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
