import React from "react";
import styles from "./SearchBar.module.css";

//리소스
const icSearch = "/images/ic_search.png";

export default function SearchBar(props) {
  return (
      <div className={styles.container}>
        <input
          className={styles.input}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          placeholder="검색"
        />
        <img src={icSearch} alt="검색" />
      </div>
  );
}

