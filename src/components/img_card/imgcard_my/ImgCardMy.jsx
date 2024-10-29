import styles from "./ImgCardMy.module.css";

import logoImage from "./assets/logo.svg";

const ImgCardMy = ({
  title,
  grade,
  genre,
  nickname,
  price,
  remainingCount,
  imageURL,
  onClick,
}) => {
  // 등급에 따라 글자의 컬러를 정하는 함수
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
    <div className={styles.imgCard} onClick={onClick}>
      <div className={styles.imgCardWrapper}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${imageURL}`}
            className={styles.cardImage}
          />
          <img src={imageURL} alt="card" className={styles.cardImage} />
        </picture>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>
          <span className={`${styles.cardGrade} ${gradeColor(grade)}`}>
            {grade.toUpperCase()}
          </span>
          <span className={styles.cardGenre}>{genre}</span>
          <span className={styles.cardNickname}>{nickname}</span>
        </div>
        <div className={styles.cardPrice}>
          <span className={styles.priceName}>가격</span>
          <span className={styles.price}>{price}P</span>
        </div>
        <div className={styles.cardCounts}>
          <span className={styles.countsName}>수량</span>
          <span className={styles.counts}>{remainingCount}</span>
        </div>
      </div>
      <img src={logoImage} alt="logo icon" className={styles.logoImage} />
    </div>
  );
};

export default ImgCardMy;
