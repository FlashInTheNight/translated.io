import { SwapLanguagesButton, TargetLanguageSelector } from "@/shared/ui";
import styles from "@/styles/entities/index.module.css";

export function OutputHeader() {
  return (
    <div className={styles.header_wrapper}>
      <TargetLanguageSelector />
      <SwapLanguagesButton />
    </div>
  );
}
