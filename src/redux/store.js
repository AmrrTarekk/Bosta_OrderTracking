import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import languageSlice from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    language: languageSlice,
  },
});
