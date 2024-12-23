import React from "react";
import style from "./CommonConfirm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { acceptExchange } from "../../../feature/seller_detail/sellerDetailAPI";
import { closeModal } from "../../../feature/seller_detail/sellerModalSlice";

import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";

import icClose from "./assets/ic_close.png";

export default function ApproveAsking() {
  const dispatch = useDispatch();
  const { exchangeId, name, grade } = useSelector(
    (state) => state.sellerModal.selectedExchangeInfo
  );

  const handleApproveConfirm = async () => {
    const result = await acceptExchange(exchangeId);

    if (result.success) {
      alert("교환이 성공적으로 승인되었습니다!");
      dispatch(closeModal());
    } else {
      alert(`교환 승인 실패: ${result.error}`);
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
        <header className={style.header}>교환 제시 승인</header>
        <p
          className={style.descMedium}
        >{`[${grade?.toUpperCase()} | ${name}] 카드와의 교환을 승인하시겠습니까?`}</p>
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={"승인하기"}
            font={"medium"}
            onClick={handleApproveConfirm}
          />
        </div>
      </div>
    </div>
  );
}
