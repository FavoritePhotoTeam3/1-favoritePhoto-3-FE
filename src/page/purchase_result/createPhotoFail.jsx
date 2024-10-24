import { useLocation, useNavigate } from "react-router-dom";
import { SecondaryBtn } from "../../components/common/btn/secondary";
import styles from "./purchaseResult.module.css";

import closeIcon from "./assets/ic_close.png";
import backIcon from "./assets/back_icon.svg";

const CreatePhotoFailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, grade } = location.state || {};

  const handleClose = () => {
    navigate(-1);
  };

  const handleMyGallery = () => {
    navigate("/mygallery");
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
          <p className={styles.headerPurchase}>포토카드 생성</p>{" "}
          <p className={styles.headerFail}>실패</p>
        </header>
        <p className={styles.descMedium}>
          [{grade?.toUpperCase()} | {name}] 포토카드 생성에 실패했습니다.
        </p>
        <div className={styles.btnWrapper}>
          <SecondaryBtn
            text={"마이갤러리로 돌아가기"}
            width={"440px"}
            height={"60px"}
            onClick={handleMyGallery}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePhotoFailPage;
