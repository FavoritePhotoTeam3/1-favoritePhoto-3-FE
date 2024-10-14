import React from "react";
import style from "./PrimaryBtnAnother.module.css";

export default function primaryBtnAnother(props) {
  return (
    <button
      className={`${style.container} ${style[props.font]} ${
        props.disable ? style.disable : style.active
      }`}
      onClick={props.onClickBtn}
      disabled={props?.disable}
    >
      {props.text}
    </button>
  );
}
