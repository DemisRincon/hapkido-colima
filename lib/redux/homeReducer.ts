import { createSlice } from "@reduxjs/toolkit";
import { homeInitialState } from "./initialStates";
// The overall state is now a single HomePage object.

const homeReducer = createSlice({
  name: "home",
  initialState: homeInitialState,
  reducers: {
    setHomePage: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    setLoadingHomePage: (state) => {
      state.isLoading = true;
    },
    setErrorHomePage: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setHomePage, setErrorHomePage, setLoadingHomePage } =
  homeReducer.actions;
export default homeReducer.reducer;
