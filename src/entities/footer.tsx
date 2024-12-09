import { useQueryStore } from "@/shared/store";
import { copyToClipboard, speakText } from "@/shared/libs";
import { TranslateButton } from "@/shared/ui";
import { CopySvg, SoundMaxFillSvg } from "@/shared/ui/svg-components";

import styles from "@/styles/entities/index.module.css";

type Props = {
  isFooterForOutputBox?: boolean;
};

export function Footer({ isFooterForOutputBox = false }: Props) {
  const { sourceLang, targetLang, text, setTranslatedText, translatedText } = useQueryStore();

  const handleSpeakSource = () => {
    const textToSpeak = isFooterForOutputBox ? translatedText : text;
    speakText(textToSpeak, sourceLang);
  };

  const handleCopyTranslation = () => {
    const textToCopy = isFooterForOutputBox? translatedText : text;
    copyToClipboard(textToCopy);
  };

  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.group_btn}>
        <button
          className={`${styles.footer_button}`}
          onClick={handleSpeakSource}
        >
          <SoundMaxFillSvg />
        </button>
        <button
          className={`${styles.footer_button}`}
          onClick={handleCopyTranslation}
        >
          <CopySvg />
        </button>
      </div>
      {!isFooterForOutputBox && (
        <TranslateButton
          text={text}
          sourceLang={sourceLang}
          targetLang={targetLang}
          setTranslatedText={setTranslatedText}
        />
      )}
    </div>
  );
}
