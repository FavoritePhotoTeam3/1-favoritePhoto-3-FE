import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother";

import { useSelector, useDispatch } from "react-redux";
import { setId, setCardId, clearState } from "../registShopDataSlice";

import { usePostCardToShop } from "../usePostCardToShop";

export const RegistButton = ({ dataId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, isSuccess, isError } = usePostCardToShop();

  const userId = useSelector((state) => state.auth.user.id);
  const myCards = useSelector((state) =>
    state.myGallery.myCards.find((item) => item.id === parseInt(dataId))
  );

  const cardId = myCards.id;
  const cardName = myCards.name;
  const cardGrade = myCards.grade;

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
      mutate(registShopData);
      // closeModal();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/regist-result", {
        state: {
          result: true,
          grade: cardGrade,
          name: cardName,
          count: registShopData.totalCount,
        },
      });
    } else if (isError) {
      navigate("/regist-result", {



        state: {
          result: false,
          grade: cardGrade,
          name: cardName,
          count: registShopData.totalCount,
        },
      });
    }
  }, [isSuccess, isError, navigate, registShopData, cardGrade, cardName]);

  return (
    <PrimaryBtnAnother text="판매하기" font="medium" onClick={handleOnClick} />
  );
};

export default RegistButton;
