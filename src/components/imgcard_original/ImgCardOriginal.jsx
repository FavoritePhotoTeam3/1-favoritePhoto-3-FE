import styles from "./ImgCardOriginal.module.css";

import logoImage from "./assets/logo.svg";
import soldOutImage from "./assets/soldout.svg";

const ImgCardOriginal = ({
  title,
  grade,
  genre,
  nickname,
  price,
  counts,
  maxCounts,
  imageUrl,
}) => {
  // 등급에 따라 글자의 컬러를 정하는 함수
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

  const isSoldOut = counts >= maxCounts;

  return (
    <div className={styles.imgCard}>
      <div className={styles.imgCardWrapper}>
        <img
          src={imageUrl}
          alt="card photo"
          className={`${styles.cardImage} ${isSoldOut ? styles.soldOut : ""}`}
        />
        {isSoldOut && (
          <img
            src={soldOutImage}
            alt="sold out"
            className={styles.soldOutImage}
          />
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>
          <span className={`${styles.cardGrade} ${gradeColor(grade)}`}>
            {grade}
          </span>
          <span className={styles.cardGenre}>{genre}</span>
          <span className={styles.cardNickname}>{nickname}</span>
        </div>
        <div className={styles.cardPrice}>
          <span className={styles.priceName}>가격</span>
          <span className={styles.price}>{price}P</span>
        </div>
        <div className={styles.cardCounts}>
          <span className={styles.countsName}>잔여</span>
          <div className={styles.counts}>
            <span className={styles.remainingCounts}>{counts}</span>/
            <span>{maxCounts}</span>
          </div>
        </div>
      </div>
      <img src={logoImage} alt="logo icon" className={styles.logoImage} />
    </div>
  );
};

export default ImgCardOriginal;
