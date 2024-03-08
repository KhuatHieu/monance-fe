import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/common.json";
import vi from "./vi/common.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});

export default i18n;
