import React from "react";
import style from "./QuantityControl.module.css";

export default function QuantityControl(props) {
  return (
    <div className={style.container}>
      <button className={style.btn} onClick={props.onMinusClick}>
        -
      </button>
      <p className={style.quantity}>{props.quantity}</p>
      <button className={style.btn} onClick={props.onPlusClick}>
        +
      </button>
    </div>
  );
}
