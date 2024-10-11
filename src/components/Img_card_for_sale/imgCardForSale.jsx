import "./imgCardForSale.css";
import img from "./assets/img.png";
import soldOut from "./assets/soldOut.png";
import common from "./assets/grade/COMMON.png";
import rare from "./assets/grade/RARE.png";
import legendary from "./assets/grade/LEGENDARY.png";
import superrare from "./assets/grade/SUPERRARE.png";
import verLine from "./assets/verLine.png";
import hoLine from "./assets/hoLine.png";
import logo from "./assets/logo.png";

export const ImgCardForSale = () => {
  return (
    <div className="cardForSale_wrapper">
      <div className="cardForSale_state wait">
        <span className="cardForSale_state_text wait">교환 제시 대기중</span>
      </div>

      <img className="cardForSale_img" src={img} alt="" />
      <div className="cardForSale_mid_container">
        <span className="mid_name">How Far I'll Go</span>
        <div className="mid_container">
          <div className="grade_genre_container">
            <img className="card_grade" src={legendary} alt="" />
            <img className="card_verLine" src={verLine} alt="" />
            <span className="card_genre">풍경</span>
          </div>
          <span className="card_userName">랍스타</span>
        </div>
        <img className="mid_container_line" src={hoLine} alt="" />
        <div className="price_counts">
          <span className="price_counts_left">가격</span>
          <span className="price_counts_right">4P</span>
        </div>
        <div className="price_counts">
          <span className="price_counts_left">수량</span>
          <span className="price_counts_right">1</span>
        </div>
      </div>
      <img className="cardForSale_logo" src={logo} alt="" />
    </div>
  );
};

export const ImgCardForSaleSoldOut = () => {
  return (
    <div className="cardForSale_wrapper">
      <div className="cardForSale_state soldOut">
        <img className="cardForSale_state_img" src={soldOut} alt="" />
      </div>
      <img className="cardForSale_img" src={img} alt="" />
      <div className="cardForSale_mid_container">
        <span className="mid_name">How Far I'll Go</span>
        <div className="mid_container">
          <div className="grade_genre_container">
            <img className="card_grade" src={common} alt="" />
            <img className="card_verLine" src={verLine} alt="" />
            <span className="card_genre">풍경</span>
          </div>
          <span className="card_userName">랍스타</span>
        </div>
        <img className="mid_container_line" src={hoLine} alt="" />
        <div className="price_counts">
          <span className="price_counts_left">가격</span>
          <span className="price_counts_right">4P</span>
        </div>
        <div className="price_counts">
          <span className="price_counts_left">수량</span>
          <span className="price_counts_right">1</span>
        </div>
      </div>
      <img className="cardForSale_logo" src={logo} alt="" />
    </div>
  );
};
