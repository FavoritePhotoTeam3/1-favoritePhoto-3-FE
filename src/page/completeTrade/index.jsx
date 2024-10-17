import { Nav } from "../../components/nav/nav";
import style from "./index.module.css";
import logo from "./assets/logo.png";
const CompleteTradePage = () => {
  return (
    <div className={style.trade_Wrapper}>
      <Nav />
      <div className={style.trade_Container}>
        <img className={style.trade_logo} src={logo} alt="" />
        <span className={style.trade_text}>포토카드 교환에 성공했습니다!</span>
        <button className={style.tarde_reDirection}>
          나의 판매 포토카드에서 확인하기
        </button>
      </div>
    </div>
  );
};

export default CompleteTradePage;
