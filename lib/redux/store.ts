import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import navigatorReducer from "./navigatorReducer";
import aboutReducer from "./aboutReducer";
import locationReducer from "./locationReducer";
import galleryReducer from "./galleryReducer";
import contactReducer from "./contactReducer";

const store = configureStore({
  reducer: {
    navigator: navigatorReducer,
    home: homeReducer,
    about: aboutReducer,
    location: locationReducer,
    gallery: galleryReducer,
    contact: contactReducer,
  },
});

export default store;
