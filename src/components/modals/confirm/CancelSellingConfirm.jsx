import React from "react";
import style from "./CommonConfirm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cancelSelling } from "../../../feature/seller_detail/sellerDetailAPI";
import { closeModal } from "../../../feature/seller_detail/sellerModalSlice";

import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";

import icClose from "./assets/ic_close.png";

export default function CancelSellingAsking(props) {
  const dispatch = useDispatch();
  const { sellInfo } = useSelector((state) => state.sellerModal);

  const handleCancelSellingConfirm = async () => {
    const result = await cancelSelling(sellInfo.shopId);

    if (result.success) {
      alert("판매가 성공적으로 취소되었습니다!");
      dispatch(closeModal());
    } else {
      alert(`판매 취소 실패: ${result.error}`);
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
        <header className={style.header}>포토카드 판매 내리기</header>
        <p className={style.descMedium}>{`정말로 판매를 중단하시겠습니까?`}</p>
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={"판매 내리기"}
            font={"medium"}
            onClick={handleCancelSellingConfirm}
          />
        </div>
      </div>
    </div>
  );
}
