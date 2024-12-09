import { useTranslate } from "../api/use-translate";
import { LoaderCircle, SortAlfaSvg } from "./svg-components";

import styles from "@/styles/shared/ui/index.module.css";

interface Props {
  text: string;
  sourceLang: string;
  targetLang: string;
  setTranslatedText: (value: string) => void;
}

export function TranslateButton({
  text,
  sourceLang,
  targetLang,
  setTranslatedText,
}: Props) {
  const { mutate, isPending } = useTranslate();

  const handleTranslate = () => {
    mutate(
      { text, sourceLang, targetLang },
      {
        onSuccess: (translatedText) => {
          setTranslatedText(translatedText);
        },
      }
    );
  };

  const isDisabled = isPending || text.trim() === "";
  
  return (
    <button
      className={
        isDisabled ? styles.translate_button__disabled : styles.translate_button
      }
      disabled={isDisabled}
      onClick={handleTranslate}
    >
      { isPending ? (
        <LoaderCircle />
      ) : (
        <>
          <SortAlfaSvg />
          <p className={styles.translate_button_text}>Translate</p>
        </>
      )}
    </button>
  );
}
