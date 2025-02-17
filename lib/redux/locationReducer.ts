import { createSlice } from "@reduxjs/toolkit";
import { locationInitialState } from "./initialStates";

const locationReducer = createSlice({
  name: "location",
  initialState: locationInitialState,
  reducers: {
    setLocationPage: (state, action) => {
      state.data = action.payload;
    },
    setLoadingLocation: (state) => {
      state.isLoading = true;
    },
    setErrorLocation: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
export const { setLocationPage, setErrorLocation, setLoadingLocation } =
  locationReducer.actions;
export default locationReducer.reducer;
