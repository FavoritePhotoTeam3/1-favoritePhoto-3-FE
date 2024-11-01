import React from "react";
import style from "./SearchBar.module.css";
import icSearch from "./assets/ic_search.png";

export default function SearchBar(props) {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        value={props.inputValue}
        onChange={(e)=> props.setInputValue(e.target.value)}
        onKeyDown={props.onKeyDown}
        placeholder="검색"
      />
      <img src={icSearch} alt="검색" onClick={props.onClick} />
    </div>
  );
}
