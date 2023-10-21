import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";

const initialState = {
  lang: localStorage.getItem("lang"),
};
export const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    translate: (state) => {
      if (localStorage.getItem("lang") === "en") {
        localStorage.setItem("lang", "ar");
      } else {
        localStorage.setItem("lang", "en");
      }
      state.lang = localStorage.getItem("lang");
      changeLanguage(state.lang);
    },
  },
});

export const { translate } = languageSlice.actions;

export default languageSlice.reducer;
