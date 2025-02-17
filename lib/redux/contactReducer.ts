import { createSlice } from "@reduxjs/toolkit";
import { contactInitialState } from "./initialStates";

const contactReducer = createSlice({
  name: "contact",
  initialState: contactInitialState,
  reducers: {
    setContactPage: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    setLoadingContactPage: (state) => {
      state.isLoading = true;
    },
    setErrorContactPage: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setContactPage, setErrorContactPage, setLoadingContactPage } =
  contactReducer.actions;
export default contactReducer.reducer;
