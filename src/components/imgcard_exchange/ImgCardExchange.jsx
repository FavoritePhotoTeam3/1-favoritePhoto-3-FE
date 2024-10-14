import styles from "./ImgCardExchange.module.css";

const ImgCardExchange = ({
  title,
  grade,
  genre,
  nickname,
  price,
  description,
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
      <div className={styles.buttonWrapper}>버튼 버튼</div>
    </div>
  );
};

export default ImgCardExchange;
