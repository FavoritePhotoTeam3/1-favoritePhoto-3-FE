import React from "react";
import style from "./CommonConfirm.module.css";
import { useNavigate } from "react-router-dom";
import { requestCardExchangeCancel } from "../../../feature/photo_exchange/PhotoExchangeAPI";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../feature/buyer_detail/buyerModalSlice";

import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";

import icClose from "./assets/ic_close.png";

export default function CancelExchangeAsking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { exchangeId, name, grade } = useSelector(
    (state) => state.buyerModal.selectedExchangeInfo
  );

  const handleCancelConfirm = async () => {
    const result = await requestCardExchangeCancel(exchangeId);

    if (result.success) {
      navigate("/exchange-cancel-success", {
        state: { name, grade },
      });
      dispatch(closeModal());
    } else {
      alert(result.error);
      navigate("/exchange-cancel-fail", {
        state: { name, grade },
      });
      dispatch(closeModal());
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <img
          src={icClose}
          alt="닫기"
          className={style.closeIcon}
          onClick={() => dispatch(closeModal())}
        />
        <header className={style.header}>교환 제시 취소</header>
        <p
          className={style.descMedium}
        >{`[${grade?.toUpperCase()} | ${name}] 교환 제시를 취소하시겠습니까?`}</p>
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={"취소하기"}
            font={"medium"}
            onClick={handleCancelConfirm}
          />
        </div>
      </div>
    </div>
  );
}
