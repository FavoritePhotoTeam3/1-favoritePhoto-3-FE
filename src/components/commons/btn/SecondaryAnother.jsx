import React, { useState } from "react";
import style from "./SecondaryAnother.module.css";

export default function secondaryAnother(props) {
  return (
    <button
    className={`${style.container} ${style[props.font]} ${
      props.disable ? style.disable : style.active
    }`}
      onClick={props.onClick}
      disabled={props?.disable}
    >
      {props.text}
    </button>
  );
}