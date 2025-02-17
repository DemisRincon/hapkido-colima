import { createSlice } from "@reduxjs/toolkit";
import { aboutInitialState } from "./initialStates";

const aboutReducer = createSlice({
  name: "about",
  initialState: aboutInitialState,
  reducers: {
    setAboutPage: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    setLoadingAboutPage: (state) => {
      state.isLoading = true;
    },
    setErrorAboutPage: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setAboutPage, setErrorAboutPage, setLoadingAboutPage } =
  aboutReducer.actions;
export default aboutReducer.reducer;
