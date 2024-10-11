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
  return (
    <div className={styles.imgCard}>
      <img src={imageUrl} alt="card image" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>
          <span className={styles.cardGrade}>{grade}</span>
          <span className={styles.cardGenre}>{genre}</span>
          <span className={styles.cardNickname}>{nickname}</span>
        </div>
        <div className={styles.cardPrice}>
          <span>가격</span>
          <span className={styles.price}>{price}P</span>
        </div>
        <div className={styles.cardCounts}>
          <span>잔여</span>
          <span className={styles.counts}>
            {counts}/{maxCounts}
          </span>
        </div>
      </div>
      <img src={logoImage} alt="logo image" className={styles.logoImage} />
    </div>
  );
};

export default ImgCardOriginal;
