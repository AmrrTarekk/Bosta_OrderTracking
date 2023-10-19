import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "ar");
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("lang"),
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapValue: false,
    },
  });

export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

export default i18n;
