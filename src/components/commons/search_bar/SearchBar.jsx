import React from "react";
import styles from "./SearchBar.module.css";
import icSearch from "./assets/ic_search.png";


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
        <img src={icSearch} alt="검색" onclick={props.onClick}/>
      </div>
  );
}

