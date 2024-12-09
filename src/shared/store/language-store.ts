import { create } from "zustand";
import { useQueryStore } from "./query-store";

export interface LanguageItem {
  langname: string;
  langcode: string;
}

interface LanguageStore {
  sourcePopular: LanguageItem[];
  targetPopular: LanguageItem[];
  allLanguages: LanguageItem[];
  setSourceLang: (lang: LanguageItem) => void;
  setTargetLang: (lang: LanguageItem) => void;
}

export const useLanguageStore = create<LanguageStore>((_set, get) => ({
  sourcePopular: [
    { langname: "English", langcode: "en" },
    { langname: "French", langcode: "fr" },
    { langname: "Spanish", langcode: "es" },
  ],
  targetPopular: [
    { langname: "English", langcode: "en" },
    { langname: "French", langcode: "fr" },
    { langname: "Spanish", langcode: "es" },
  ],
  allLanguages: [
    { langname: "English", langcode: "en" },
    { langname: "French", langcode: "fr" },
    { langname: "Spanish", langcode: "es" },
    { langname: "German", langcode: "de" },
    { langname: "Italian", langcode: "it" },
    { langname: "Hindi", langcode: "hi" },
    { langname: "Portuguese", langcode: "pt" },
    { langname: "Dutch", langcode: "nl" },
    { langname: "Chinese", langcode: "zh" },
  ],

  setSourceLang: (lang) => {
    const { targetLang } = useQueryStore.getState();

    if (lang.langcode === targetLang) {
      const nextTargetLang =
      get().targetPopular.find((l) => l.langcode !== lang.langcode)?.langcode ||
        "en";
      useQueryStore.getState().setTargetLang(nextTargetLang);
    }

    useQueryStore.getState().setSourceLang(lang.langcode);

    if (!get().sourcePopular.some((item) => item.langcode === lang.langcode)) {
      get().sourcePopular.pop();
      get().sourcePopular.unshift({
        langname: lang.langname,
        langcode: lang.langcode,
      });
    }
  },

  setTargetLang: (lang) => {
    const { sourceLang } = useQueryStore.getState();

    if (lang.langcode === sourceLang) {
      const nextSourceLang =
      get().sourcePopular.find((l) => l.langcode !== lang.langcode)?.langcode ||
        "fr";
      useQueryStore.getState().setSourceLang(nextSourceLang);
    }

    useQueryStore.getState().setTargetLang(lang.langcode);

    if (!get().targetPopular.some((item) => item.langcode === lang.langcode)) {
      get().targetPopular.pop();
      get().targetPopular.unshift({
        langname: lang.langname,
        langcode: lang.langcode,
      });
    }
  },
}));
