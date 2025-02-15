import { createSlice } from "@reduxjs/toolkit";

export interface NavigatorState {
  isMobileNavOpen: boolean;
  imageUrl: string;
  nav: { link: string; name: string }[];
  bottomMessage: string;
  footerData: { icon: string; text: string }[];
}

const initialState: NavigatorState = {
  isMobileNavOpen: false,
  imageUrl: "",
  nav: [],
  bottomMessage: "",
  footerData: [],
};

const navigatorReducer = createSlice({
  name: "navigator",
  initialState,
  reducers: {
    setIsMobileNavOpen: (state, action) => {
      state.isMobileNavOpen = action.payload;
    },
    setNavigator: (state, action) => {
      state.nav = action.payload.linksObject;
      state.imageUrl = action.payload.logo.url;
      state.bottomMessage = action.payload.bottomMessage;
      state.footerData = action.payload.footerData;
    },
  },
});

export const { setNavigator, setIsMobileNavOpen } = navigatorReducer.actions;
export default navigatorReducer.reducer;
