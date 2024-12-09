import { Footer, OutputHeader } from "@/entities";
import { useQueryStore } from "@/shared/store";
import { Skeleton } from "@/shared/ui";
import styles from "@/styles/features/index.module.css";

export function OutputBox() {
  const { translatedText, isPending } = useQueryStore();

  const outputText =
    translatedText || "No translation yet. Please submit a text.";

  return (
    <div className={`${styles.wrapper} ${styles.output_box_bg}`}>
      <OutputHeader />
      <div
        className={`${styles.content} ${styles.content__output}`}
        aria-label="content"
      >
        {isPending ? (
          <Skeleton />
        ) : (
          <p className={styles.content_text}>{outputText}</p>
        )}
      </div>

      <Footer isFooterForOutputBox={true} />
    </div>
  );
}
