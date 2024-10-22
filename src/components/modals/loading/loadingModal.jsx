import style from "./loadingModal.module.css";
import loading from "./assets/loader.png";
const LoadingModal = () => {
  return (
    <div className={style.modal_Wrapper}>
      <div className={style.modal_Container}>
        <img className={style.modal_loding} src={loading} alt="" />
        <span className={style.modal_subText}>잠시만 기다려주세요...</span>
      </div>
    </div>
  );
};
export default LoadingModal;
