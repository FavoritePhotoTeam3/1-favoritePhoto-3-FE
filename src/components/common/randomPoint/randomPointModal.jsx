import style from "./randomPointModal.module.css";
import logo from "./assets/logo.png";
import box_1 from "./assets/box1.png";
import box_2 from "./assets/box2.png";
import box_3 from "./assets/box3.png";
import cancel from "./assets/cancel.png";

const RandomPointModal = ({ modalHandler, boxClick }) => {
  return (
    <div className={style.random_Wrapper}>
      <div className={style.random_Container}>
        <div className={style.random_item_Container}>
          <img
            onClick={modalHandler}
            className={style.random_cancel}
            src={cancel}
            alt=""
          />
          <div className={style.random_item_text_Container}>
            <img className={style.random_item_text_logo} src={logo} alt="" />
            <p className={style.random_item_text_midArea}>
              <span>1시간마다 돌아오는 기회!</span>
              <span>랜덤 상자 뽑기를 통해 포인트를 획득하세요!</span>
            </p>
          </div>
          <div className={style.random_item_box_Container}>
            <img
              onClick={boxClick}
              className={style.random_item_box_side}
              src={box_1}
              alt=""
            />
            <img
              onClick={boxClick}
              className={style.random_item_box_middle}
              src={box_2}
              alt=""
            />
            <img
              onClick={boxClick}
              className={style.random_item_box_side}
              src={box_3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomPointModal;
