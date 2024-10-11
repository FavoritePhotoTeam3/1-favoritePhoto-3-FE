import styles from "./ImgCardOriginal.module.css";

import logoImage from "./assets/logo.svg";

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

  return (
    <div className={styles.imgCard}>
      <img src={imageUrl} alt="card image" className={styles.cardImage} />
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
      <img src={logoImage} alt="logo image" className={styles.logoImage} />
    </div>
  );
};

export default ImgCardOriginal;
