import React from "react";
import style from "./CommonConfirm.module.css";
import { useNavigate } from "react-router-dom";
import { purchaseCard } from "../../../feature/buyer_detail/buyerDetailAPI";

import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";

import icClose from "./assets/ic_close.png";

export default function PurchaseAsking(props) {
  const navigate = useNavigate();

  const handlePurchaseConfirm = async () => {
    const result = await purchaseCard(
      props.purchase.shopId,
      props.purchase.count
    );

    if (result.success) {
      navigate("/purchase-success", {
        state: { purchase: { ...props.purchase } },
      });
    } else {
      alert(result.error);
      navigate("/purchase-fail", {
        state: { purchase: { ...props.purchase } },
      });
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <img
          src={icClose}
          alt="닫기"
          className={style.closeIcon}
          onClick={props.onClose}
        />
        <header className={style.header}>포토카드 구매</header>
        <p
          className={style.descMedium}
        >{`[${props.purchase.grade.toUpperCase()} | ${props.purchase.name}] ${
          props.purchase.count
        }장을 구매하시겠습니까?`}</p>
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={"구매하기"}
            font={"medium"}
            onClick={handlePurchaseConfirm}
          />
        </div>
      </div>
    </div>
  );
}
