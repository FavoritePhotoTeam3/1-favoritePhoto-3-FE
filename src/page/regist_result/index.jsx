import { useLocation, useNavigate } from "react-router-dom";
import { SecondaryBtn } from "../../components/common/btn/secondary";
import styles from "./index.module.css";

import closeIcon from "./assets/ic_close.png";
import backIcon from "./assets/back_icon.svg";

export const RegistResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { result, grade, name, count } = location.state || {};

  const handleClose = () => {
    navigate(-1);
  };

  const handleMyShop = () => {
    navigate("/myshop");
  };

  const handleMarket = () => {
    navigate("/");
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
          <p className={styles.headerPurchase}>판매등록</p>{" "}
          {result ? (
            <p className={styles.headerSuccess}>성공</p>
          ) : (
            <p className={styles.headerFail}>실패</p>
          )}
        </header>

        {result ? (
          <p className={styles.descMedium}>
            {`[${grade?.toUpperCase()} | ${name}] ${count}장 판매 등록에 성공했습니다!`}
          </p>
        ) : (
          <p className={styles.descMedium}>
            {`[${grade?.toUpperCase()} | ${name}] ${count}장 판매 등록에 실패했습니다.`}
          </p>
        )}
        <div className={styles.btnWrapper}>
          {result ? (
            <SecondaryBtn
              text={"나의 판매 포토카드에서 확인하기"}
              width={"440px"}
              height={"60px"}
              onClick={handleMyShop}
            />
          ) : (
            <SecondaryBtn
              text={"마켓플레이스로 돌아가기"}
              width={"440px"}
              height={"60px"}
              onClick={handleMarket}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistResult;
