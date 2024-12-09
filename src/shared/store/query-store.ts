import { create } from "zustand";
import { updateURL } from "@/shared/libs";

interface QueryStore {
  searchParams: URLSearchParams;
  sourceLang: string;
  targetLang: string;
  text: string;
  translatedText: string;
  isPending: boolean;
  setSourceLang: (value: string) => void;
  setTargetLang: (value: string) => void;
  setText: (value: string) => void;
  setTranslatedText: (value: string) => void;
  swapLanguagesAndText: () => void;
  setPending: (value: boolean) => void;
}

export const useQueryStore = create<QueryStore>((set) => ({
  searchParams: (() => {
    const defaultParams = new URLSearchParams({
      text: "Hello, how are you?",
      sl: "en",
      tl: "fr",
    });
    updateURL(defaultParams);
    return defaultParams;
  })(),
  sourceLang: "en",
  targetLang: "fr",
  text: "Hello, how are you?",
  translatedText: "Bonjour, comment allez-vous ?",
  isPending: false,
  setSourceLang: (value) =>
    set((state) => {
      state.searchParams.set("sl", value);
      updateURL(state.searchParams);
      return { sourceLang: value };
    }),
  setTargetLang: (value) =>
    set((state) => {
      state.searchParams.set("tl", value);
      updateURL(state.searchParams);
      return { targetLang: value };
    }),
  setText: (value) =>
    set((state) => {
      if (value) {
        state.searchParams.set("text", value);
      } else {
        state.searchParams.delete("text");
      }
      updateURL(state.searchParams);
      return { text: value };
    }),
  setTranslatedText: (value) => set(() => ({ translatedText: value })),
  setPending: (value) => set({ isPending: value }),
  swapLanguagesAndText: () =>
    set((state) => {
      const newSearchParams = state.searchParams;
      const newSourceLang = state.targetLang;
      const newTargetLang = state.sourceLang;
      const newText = state.translatedText;

      newSearchParams.set("sl", newSourceLang);
      newSearchParams.set("tl", newTargetLang);
      newSearchParams.set("text", newText || "");

      updateURL(newSearchParams);

      return {
        sourceLang: newSourceLang,
        targetLang: newTargetLang,
        text: newText,
        translatedText: state.text,
      };
    }),
}));
