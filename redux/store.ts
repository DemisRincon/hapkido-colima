import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageReducer";
import navigatorReducer from "./navigatorReducer";

const store = configureStore({
  reducer: {
    navigator: navigatorReducer,
    page: pageReducer,
  },
});

export default store;
