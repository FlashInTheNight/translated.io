import { useQueryStore } from "../store";

import styles from "@/styles/shared/ui/index.module.css";
import { HorizontalTopLeftMain } from "./svg-components";

export function SwapLanguagesButton() {
  const { swapLanguagesAndText } = useQueryStore();

  const handleSwap = () => {
    swapLanguagesAndText();
  };

  return (
    <button className={styles.swap_languages_button} onClick={handleSwap}>
      <HorizontalTopLeftMain />
    </button>
  );
}
