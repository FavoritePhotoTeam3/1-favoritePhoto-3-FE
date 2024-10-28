import React from "react";
import style from "./QuantityControl.module.css";

import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "../registShopDataSlice";

export default function QuantityControl({ maxCount }) {
  const dispatch = useDispatch();
  const { totalCount } = useSelector((state) => state.registShopData);

  const handleIncrease = () => {
    if (totalCount < maxCount) {
      dispatch(increaseCount());
    }
  };

  const handleDecrease = () => {
    if (totalCount > 0) {
      dispatch(decreaseCount());
    }
  };

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={handleDecrease}>
        −
      </button>
      <p className={style.quantity}>{totalCount}</p>
      <button className={style.btn} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
