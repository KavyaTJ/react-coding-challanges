import React, { useState } from "react";
import styles from "./LiveCharacterCounter.module.css";

export default function LiveCharacterCounter() {
  const [input, setInput] = useState("");
  const [warning, setWarning] = useState("");
  const [disable, setDisabled] = useState(false);

  const characterCount = input.replace(/\s/g, "").length;
  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    if (characterCount === 99) {
      setWarning("⚠️ Warning: You are approaching the character limit!");
    } else if (characterCount === 149) {
      setWarning("❌ Character limit reached! No more input allowed.");
      setDisabled(true);
    }
    setInput(e.target.value);
  };

  return (
    <div className={styles.container}>
    <input
      type="text"
      placeholder="Type something..."
      value={input}
      onChange={handleInputChange}
      disabled={disable}
      className={styles.inputBox}
      aria-multiline
    />
    <div className={styles.info}>
      <span className={styles.counter}>{characterCount}/150</span>
      <span className={`${styles.warning} ${characterCount >= 99 ? styles.show : ""}`}>
        {warning}
      </span>
    </div>
  </div>
  );
}
