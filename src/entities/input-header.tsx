import { DetectLanguageButton, SourceLanguageSelector } from "@/shared/ui";
import styles from "@/styles/entities/index.module.css";


export function InputHeader() {

  return (
    <div className={styles.header_wrapper}>
      <DetectLanguageButton />
      <SourceLanguageSelector />
    </div>
  );
}
