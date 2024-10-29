import React from "react";
import style from "@styles/PageFilterOptionButton.module.css";
import icFillter from "../assets/icon_filter.svg";

export const FilterButton = () => {
  return (
    <button className={style.filterButton}>
      <img src={icFillter} alt="" />
    </button>
  );
}

export default FilterButton;