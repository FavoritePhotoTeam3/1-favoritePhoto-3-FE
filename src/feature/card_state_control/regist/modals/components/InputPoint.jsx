import React from "react";
import style from "./InputPoint.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../registShopDataSlice";

export const InputPoint = () => {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.registShopData);

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    dispatch(setPrice(newValue ? parseInt(newValue) : 0));
  };
  
  const handleOnblur = () => {
    if (price <= 0) {
      alert("가격은 0P 이상이여야 합니다.");
    }
  }

  return (
    <div className={style.inputContainer}>
      <input
        type="number"
        className={style.pointInput}
        placeholder="숫자만 입력"
        value={price || ""}
        onChange={handleOnChange}
        onBlur={handleOnblur}
      />
      <p className={style.spanP}>P</p>
    </div>
  );
};

export default InputPoint;
