import { useLanguageStore, useQueryStore } from "@/shared/store";
import { type LanguageItem } from "@/shared/store/language-store";

import styles from "@/styles/shared/ui/index.module.css";

export const SourceLanguageSelector = () => {
  const { sourcePopular, setSourceLang, allLanguages } = useLanguageStore();
  const { sourceLang, targetLang } = useQueryStore();

  const handleButtonClick = (lang: LanguageItem) => {
    setSourceLang(lang);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const parsedLang = JSON.parse(selectedLang);
    setSourceLang(parsedLang);
  };

  const availableLanguages = allLanguages.filter(
    (lang) =>
      !sourcePopular.some((item) => item.langcode === lang.langcode) &&
      lang.langcode !== targetLang
  );

  return (
    <div className={styles.language_selector}>
      <div className={styles.buttons_group}>
        {sourcePopular.map((lang) => (
          <button
            key={lang.langcode}
            onClick={() => handleButtonClick(lang)}
            className={`${styles.button} ${
              lang.langcode === sourceLang ? styles.button__active : ""
            }`}
          >
            {lang.langname}
          </button>
        ))}
      </div>
      <select
        className={styles.language_selector__dropdown}
        onChange={handleDropdownChange}
        value=""
      >
        <option
          className={styles.language_selector__default_option}
          value=""
          disabled
        ></option>
        {availableLanguages.map((lang) => (
          <option
            className={styles.language_selector__option}
            key={lang.langcode}
            value={JSON.stringify(lang)}
          >
            {lang.langname}
          </option>
        ))}
      </select>
    </div>
  );
};
