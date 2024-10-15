import style from "./randomPoint.module.css";
import logo from "./assets/logo.png";
import box_1 from "./assets/box1.png";
import box_2 from "./assets/box2.png";
import box_3 from "./assets/box3.png";
import cancel from "./assets/cancel.png";

const RandomPoint = () => {
  const minute = 59;
  const second = 59;
  return (
    <div className={style.random_Wrapper}>
      <div className={style.random_Container}>
        <div className={style.random_item_Container}>
          <img className={style.random_cancel} src={cancel} alt="" />
          <div className={style.random_item_text_Container}>
            <img className={style.random_item_text_logo} src={logo} alt="" />
            <p className={style.random_item_text_midArea}>
              <span>1시간마다 돌아오는 기회!</span>
              <span>랜덤 상자 뽑기를 통해 포인트를 획득하세요!</span>
            </p>
            <p className={style.random_item_text_bottomArea}>
              <span>다음 기회까지 남은 시간 </span>
              <span className={style.random_item_text_hour}>
                {" "}
                {minute}분 {second}초
              </span>
            </p>
          </div>
          <div className={style.random_item_box_Container}>
            <img className={style.random_item_box_side} src={box_1} alt="" />
            <img className={style.random_item_box_middle} src={box_2} alt="" />
            <img className={style.random_item_box_side} src={box_3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomPoint;
