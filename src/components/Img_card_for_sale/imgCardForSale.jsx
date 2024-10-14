import font from "../../styles/DescCardFont.module.css";
import style from "./imgCardForSale.module.css";
import img from "./assets/img.png";
import soldOut from "./assets/soldOut.png";
import verLine from "./assets/verLine.png";
import hoLine from "./assets/hoLine.png";
import logo from "./assets/logo.png";

export const ImgCardForSale = ({ grade }) => {
  const getColor = (grade) => {
    switch (grade) {
      case "common":
        return font.common;
      case "rare":
        return font.rare;
      case "super rare":
        return font.superRare;
      case "legendary":
        return font.legendary;
      default:
        return font.common;
    }
  };
  return (
    <div className={style.cardForSale_wrapper}>
      <div className={`${style.cardForSale_state} ${style.wait}`}>
        <span className={`${style.cardForSale_state_text} ${style.wait}`}>
          교환 제시 대기중
        </span>
      </div>

      <img className={style.cardForSale_img} src={img} alt="" />
      <div className={style.cardForSale_mid_container}>
        <span className={style.mid_name}>How Far I'll Go</span>
        <div className={style.mid_container}>
          <div className={style.grade_genre_container}>
            <span className={`${style.card_grade} ${getColor(grade)}`}>
              {grade.toUpperCase()}
            </span>
            <img className={style.card_verLine} src={verLine} alt="" />
            <span className={style.card_genre}>풍경</span>
          </div>
          <span className={style.card_userName}>랍스타</span>
        </div>
        <img className={style.mid_container_line} src={hoLine} alt="" />
        <div className={style.price_counts}>
          <span className={style.price_counts_left}>가격</span>
          <span className={style.price_counts_right}>4P</span>
        </div>
        <div className={style.price_counts}>
          <span className={style.price_counts_left}>수량</span>
          <span className={style.price_counts_right}>1</span>
        </div>
      </div>
      <img className={style.cardForSale_logo} src={logo} alt="" />
    </div>
  );
};

export const ImgCardForSaleSoldOut = ({ grade }) => {
  const getColor = (grade) => {
    switch (grade) {
      case "common":
        return font.common;
      case "rare":
        return font.rare;
      case "super rare":
        return font.superRare;
      case "legendary":
        return font.legendary;
      default:
        return font.common;
    }
  };
  return (
    <div className={style.cardForSale_wrapper}>
      <div className={`${style.cardForSale_state} ${style.soldOut}`}>
        <img className={style.cardForSale_state_img} src={soldOut} alt="" />
      </div>
      <img className={style.cardForSale_img} src={img} alt="" />
      <div className={style.cardForSale_mid_container}>
        <span className={style.mid_name}>How Far I'll Go</span>
        <div className={style.mid_container}>
          <div className={style.grade_genre_container}>
            <span className={`${style.card_grade} ${getColor(grade)}`}>
              {grade.toUpperCase()}
            </span>
            <img className={style.card_verLine} src={verLine} alt="" />
            <span className={style.card_genre}>풍경</span>
          </div>
          <span className={style.card_userName}>랍스타</span>
        </div>
        <img className={style.mid_container_line} src={hoLine} alt="" />
        <div className={style.price_counts}>
          <span className={style.price_counts_left}>가격</span>
          <span className={style.price_counts_right}>4P</span>
        </div>
        <div className={style.price_counts}>
          <span className={style.price_counts_left}>수량</span>
          <span className={style.price_counts_right}>1</span>
        </div>
      </div>
      <img className={style.cardForSale_logo} src={logo} alt="" />
    </div>
  );
};
