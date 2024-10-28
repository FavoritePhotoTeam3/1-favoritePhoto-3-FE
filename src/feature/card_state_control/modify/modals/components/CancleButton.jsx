import React from "react";
// import style from "./CancleButton.module.css";

import { useDispatch } from "react-redux";
import { clearState } from "../patchShopDataSlice";
import SecondaryAnother from "@components/common/btn/SecondaryAnother";

export const CancleButton = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(clearState());
    closeModal();
  };

  return (
    <>
      <SecondaryAnother text="취소하기" font="medium" onClick={handleOnClick} />
    </>
  );
};

export default CancleButton;
