import { InputBox, OutputBox } from "@/features";
import styles from "@/styles/widgets/translate-panel.module.css"


export function TranslatePanel() {

  return (
    <div className={styles.wrapper}>
      <InputBox />
      <OutputBox /> 
    </div>
  );
}
