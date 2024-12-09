import { Footer, InputHeader } from "@/entities";
import { useQueryStore } from "@/shared/store";

import styles from "@/styles/features/index.module.css";


const MAX_CHAR_COUNT = 500; 
export function InputBox() {
  const { text, setText } = useQueryStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= MAX_CHAR_COUNT) {
      setText(inputValue);
    }
  };

  const adjustTextareaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustTextareaHeight(e); 
    handleTextChange(e); 
  };

  return (
    <div className={styles.wrapper}>
      <InputHeader />
      <div className={styles.content}>
        <textarea
          className={styles.textarea}
          name="source_text"
          onChange={handleTextareaInput}
          placeholder="Enter your text here"
          value={text}
          maxLength={MAX_CHAR_COUNT}
        ></textarea>
        <p
          className={
            text.length >= MAX_CHAR_COUNT ? styles.counterLimit : styles.counter
          }
        >
          {text.length}/{MAX_CHAR_COUNT}
        </p>
      </div>
      <Footer />
    </div>
  );
}
