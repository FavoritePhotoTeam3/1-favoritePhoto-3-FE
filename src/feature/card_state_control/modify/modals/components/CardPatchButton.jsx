import React, { useEffect } from "react";
import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother";

import { useSelector, useDispatch } from "react-redux";
import { setId, setCardId, clearState } from "../patchShopDataSlice";

import { usePatchCardToShop } from "../usePatchCardToShop";

export const RegistButton = ({ cardId, closeModal }) => {
  const dispatch = useDispatch();
  const mutation = usePatchCardToShop();

  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    dispatch(setId(userId));
    dispatch(setCardId(cardId));
    return () => {
      dispatch(clearState());
    };
  }, [userId, cardId, dispatch]);

  const registShopData = useSelector((state) => state.registShopData);

  const handleOnClick = () => {
    if (!registShopData.price && !registShopData.totalCount) {
      alert("판매 수량과 가격을 입력해야 합니다.");
    } else {
      mutation.mutate(registShopData);
      closeModal();
    }
  };

  return (
    <PrimaryBtnAnother text="판매하기" font="medium" onClick={handleOnClick} />
  );
};

export default RegistButton;
