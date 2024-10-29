import React from "react";
import style from "./QuantityControl.module.css";

import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "../patchShopDataSlice";

export default function QuantityControl({ maxCount }) {
  const dispatch = useDispatch();
  const { patchCount = 0 } = useSelector((state) => state.patchShopData);

  const handleIncrease = () => {
    if (patchCount < maxCount) {
      dispatch(increaseCount());
    }
  };

  const handleDecrease = () => {
    if (patchCount > 0) {
      dispatch(decreaseCount());
    }
  };

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={handleDecrease}>
        −
      </button>
      <p className={style.quantity}>{patchCount}</p>
      <button className={style.btn} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
