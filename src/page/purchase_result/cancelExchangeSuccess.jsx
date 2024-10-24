import { useNavigate } from "react-router-dom";
import { SecondaryBtn } from "../../components/common/btn/secondary";
import styles from "./purchaseResult.module.css";

import closeIcon from "./assets/ic_close.png";
import backIcon from "./assets/back_icon.svg";

const CancelExchangeSuccessPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleMySales = () => {
    navigate("/mysales"); // 나의 판매 포토카드 경로 넣어야함
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.closeIconWrapper}>
          <img
            src={closeIcon}
            alt="닫기"
            className={styles.closeIcon}
            onClick={handleClose}
          />
          <img
            src={backIcon}
            alt="닫기"
            className={styles.backIcon}
            onClick={handleClose}
          />
        </div>
        <header className={styles.header}>
          <p className={styles.headerPurchase}>교환 제시 취소</p>{" "}
          <p className={styles.headerSuccess}>성공</p>
        </header>
        <p className={styles.descMedium}>
          포토카드 교환 제시 취소에 성공했습니다!
        </p>
        <div className={styles.btnWrapper}>
          <SecondaryBtn
            text={"나의 판매 포토카드에서 확인하기"}
            width={"440px"}
            height={"60px"}
            onClick={handleMySales}
          />
        </div>
      </div>
    </div>
  );
};

export default CancelExchangeSuccessPage;
