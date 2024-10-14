import styles from "./ImgCardExchange.module.css";
import { PrimaryBtn } from "../commons/btn/primaryBtn";
import { SecondaryBtn } from "../commons/btn/secondary";
import { useEffect, useState } from "react";

const ImgCardExchange = ({
  title,
  grade,
  genre,
  nickname,
  price,
  description,
  imageUrl,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 743);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gradeColor = (grade) => {
    switch (grade) {
      case "COMMON":
        return styles.common;
      case "RARE":
        return styles.rare;
      case "SUPER RARE":
        return styles.superRare;
      case "LEGENDARY":
        return styles.legendary;
      default:
        return "";
    }
  };

  return (
    <div className={styles.imgCard}>
      <div className={styles.imgCardWrapper}>
        <img src={imageUrl} alt="card photo" className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>
          <span className={`${styles.cardGrade} ${gradeColor(grade)}`}>
            {grade}
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
          text={isMobile ? "거절" : "거절하기"}
          width={"100%"}
          height={isMobile ? "40px" : "60px"}
        />
        <PrimaryBtn
          text={isMobile ? "승인" : "승인하기"}
          width={"100%"}
          height={isMobile ? "40px" : "60px"}
        />
      </div>
    </div>
  );
};

export default ImgCardExchange;
