import styles from "./ImgCardExchangeMy.module.css";
import { SecondaryBtn } from "../common/btn/secondary";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openCancelModal } from "../../feature/buyer_detail/buyerModalSlice";

const ImgCardExchangeMy = ({
  title,
  grade,
  genre,
  nickname,
  price,
  description,
  imageUrl,
  exchangeId,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    dispatch(
      openCancelModal({
        exchangeId,
        name: title,
        grade,
      })
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 743);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gradeColor = (grade) => {
    switch (grade.toLowerCase()) {
      case "common":
        return styles.common;
      case "rare":
        return styles.rare;
      case "super rare":
        return styles.superRare;
      case "legendary":
        return styles.legendary;
      default:
        return styles.common;
    }
  };

  return (
    <div className={styles.imgCard}>
      <div className={styles.imgCardWrapper}>
        <img src={imageUrl} alt="card" className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>
          <span className={`${styles.cardGrade} ${gradeColor(grade)}`}>
            {grade.toUpperCase()}
          </span>
          <span className={styles.cardGenre}>{genre}</span>
          <div className={styles.cardPrice}>
            <span className={styles.price}>{price}P</span>
            <span className={styles.priceDesc}>에 구매</span>
          </div>
          <span className={styles.cardNickname}>{nickname}</span>
        </div>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.buttonWrapper}>
        <SecondaryBtn
          text={isMobile ? "취소" : "취소하기"}
          width={"100%"}
          height={isMobile ? "40px" : "60px"}
          onClick={handleCancelClick}
        />
      </div>
    </div>
  );
};

export default ImgCardExchangeMy;
