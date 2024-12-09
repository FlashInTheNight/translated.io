import { useQueryStore } from "@/shared/store";
import { detectLanguage } from "@/shared/libs";

import styles from "@/styles/shared/ui/index.module.css";
import { useState } from "react";

export function DetectLanguageButton() {
  const { text, setSourceLang } = useQueryStore();
  const [DetectLanguage, setDetectLanguage] = useState("");
  const btnText = DetectLanguage || "Detect Language";

  const handleDetectLanguage = () => {
    const { languageName, twoLetterCode } = detectLanguage(text);
    setDetectLanguage(languageName);
    setSourceLang(twoLetterCode);
  };

  return (
    <button
      className={`${styles.detect_language_button}`}
      onClick={handleDetectLanguage}
    >
      {btnText}
    </button>
  );
}
