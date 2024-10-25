import React from "react";
import style from "./CommonConfirm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { refuseExchange } from "../../../feature/seller_detail/sellerDetailAPI";
import { closeModal } from "../../../feature/seller_detail/sellerModalSlice";

import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";

import icClose from "./assets/ic_close.png";

export default function RejectAsking() {
  const dispatch = useDispatch();

  const { exchangeId, name, grade } = useSelector(
    (state) => state.sellerModal.selectedExchangeInfo
  );

  const handleRejectConfirm = async () => {
    const result = await refuseExchange(exchangeId);

    if (result.success) {
      alert("교환이 거절되었습니다!");
      dispatch(closeModal());
    } else {
      alert(`교환 거절 실패: ${result.error}`);
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
        <header className={style.header}>교환 제시 거절</header>
        <p
          className={style.descMedium}
        >{`[${grade?.toUpperCase()} | ${name}] 카드와의 교환을 거절하시겠습니까?`}</p>
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={"거절하기"}
            font={"medium"}
            onClick={handleRejectConfirm}
          />
        </div>
      </div>
    </div>
  );
}
