import { createSlice } from "@reduxjs/toolkit";
export interface RootState {
  name: string;
  pages: {
    HeroBackgroundImage: {
      image: {
        url: string;
      };
      text: string;
    };
  };
}

const homeReducer = createSlice({
  name: "home",
  initialState: {
    name: "Home",
    pages: {},
  },
  reducers: {
    setPage: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export const { setPage } = homeReducer.actions;
export default homeReducer.reducer;
