import { createSlice } from "@reduxjs/toolkit";
import { galleryInitialState } from "./initialStates";

const galleryReducer = createSlice({
  name: "gallery",
  initialState: galleryInitialState,
  reducers: {
    setGalleryPage: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setLoadingGalleryPage: (state) => {
      state.isLoading = true;
    },
    setErrorGalleryPage: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
export const { setErrorGalleryPage, setGalleryPage, setLoadingGalleryPage } =
  galleryReducer.actions;
export default galleryReducer.reducer;
