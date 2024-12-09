import { franc } from "franc";
import { iso6393To1 } from "iso-639-3";
import { toast } from "react-toastify";

const getLanguage = (code: string): string | undefined => {
  const lang = new Intl.DisplayNames(["en"], { type: "language" });
  return lang.of(code);
};

export const detectLanguage = (
  text: string
): { languageName: string; twoLetterCode: string } => {
  if (!text) {
    toast.error("Text is required to detect the language.");
    throw new Error("Text is required to detect the language.");
  }

  const detectedLangCode = franc(text);

  if (detectedLangCode === "und") {
    toast.error("Unable to detect language. Please provide more text.");
    throw new Error("Unable to detect language. Please provide more text.");
  }

  const twoLetterCode = iso6393To1[detectedLangCode];

  if (!twoLetterCode) {
    toast.error(
      "Detected language is not supported (If you see this error, it may be worth adding more text.)."
    );
    throw new Error(
      "Detected language is not supported."
    );
  }

  const languageName = getLanguage(twoLetterCode);

  if (!languageName) {
    toast.error("Detected language is not supported (If you see this error, it may be worth adding more text.).");
    throw new Error("Detected language is not supported.");
  }

  const result = { languageName, twoLetterCode };
  return result;
};
