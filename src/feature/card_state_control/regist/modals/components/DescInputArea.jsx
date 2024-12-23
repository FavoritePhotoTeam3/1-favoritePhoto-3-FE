import React from "react";
import styles from "./DescInputArea.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setExchangeDescription } from "../registShopDataSlice";

// Props 정리 *이름 준수
// placeholder
// onChange
// value

export const DescInputArea = (props) => {
  const dispatch = useDispatch();
  const { exchangeDescription } = useSelector((state) => state.registShopData);

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