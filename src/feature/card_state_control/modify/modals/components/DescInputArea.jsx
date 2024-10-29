import React from "react";
import styles from "./DescInputArea.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setExchangeDescription } from "../patchShopDataSlice";

export const DescInputArea = (props) => {
  const dispatch = useDispatch();
  const { exchangeDescription } = useSelector((state) => state.patchShopData);

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    dispatch(setExchangeDescription(newValue));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <div className={styles.outBoxFocus}>
        <textarea
          className={styles.textArea}
          placeholder="설명을 입력해주세요"
          onChange={handleOnChange}
          value={exchangeDescription}
        />
      </div>
    </div>
  );
}


export default DescInputArea