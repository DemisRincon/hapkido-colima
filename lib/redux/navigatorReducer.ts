import { createSlice } from "@reduxjs/toolkit";

export interface NavigatorState {
  isMobileNavOpen: boolean;
  imageUrl: string;
  isLoading: boolean;
  error: string;
  nav: { link: string; name: string }[];
  bottomMessage: string;
  footerData: { icon: string; text: string }[];
}

const initialState: NavigatorState = {
  isMobileNavOpen: false,
  isLoading: false,
  error: "",
  imageUrl: "",
  nav: [],
  bottomMessage: "",
  footerData: [],
};

const navigatorReducer = createSlice({
  name: "navigator",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setIsMobileNavOpen: (state, action) => {
      state.isMobileNavOpen = action.payload;
    },
    setNavigator: (state, action) => {
      state.nav = action.payload.linksObject;
      state.imageUrl = action.payload.logo.url;
      state.bottomMessage = action.payload.bottomMessage;
      state.footerData = action.payload.footerData;
      state.isLoading = false;
    },
  },
});

export const { setNavigator, setIsMobileNavOpen, setError, setLoading } =
  navigatorReducer.actions;
export default navigatorReducer.reducer;
