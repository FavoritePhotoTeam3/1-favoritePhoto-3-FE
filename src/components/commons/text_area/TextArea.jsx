import React, { useState } from 'react';
import styles from "./TextArea.module.css";

// Props 정리 *이름 준수
// placeholder
// onChange
// value

export default function TextArea(props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <div className={isFocused ? styles.outBoxFocus : styles.outBox}>
      <textarea
        className={styles.textArea}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
      />
      </div>
    </div>
  );
}
