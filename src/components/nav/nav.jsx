import style from "./nav.module.css";
import logo from "./assets/logo.png";
import notice from "./assets/notice.png";
import menu from "./assets/menu.png";
import verLine from "./assets/verLine.png";

const Nav = () => {
  return (
    <div className={style.nav_Wrapper}>
      <div className={style.nav_Container}>
        <img className={style.nav_item_menu} src={menu} alt="" />
        <img className={style.nav_logo} src={logo} alt="" />
        <NavItem isLogin={true} />
      </div>
    </div>
  );
};

export default Nav;

const NavItem = ({ isLogin }) => {
  console.log(isLogin);
  if (isLogin) {
    return (
      <div className={style.nav_item_container}>
        <span className={style.nav_item_point}>1,540p</span>
        <img className={style.nav_item_notice} src={notice} alt="" />
        <img className={style.nav_item_verLine} src={verLine} alt="" />
        <span className={style.nav_item_userName}>유디</span>
        <span className={style.nav_itme_logout}>로그아웃</span>
      </div>
    );
  } else {
    return (
      <div className={`${style.nav_item_container} ${style.notLogin}`}>
        <span className={style.nav_item_text}>로그인</span>
        <span className={style.nav_item_text}>회원 가입</span>
      </div>
    );
  }
};

const MyPageNav = () => {
  return (
    <div className={style.nav_Wrapper}>
      <img className={style.nav_item_menu} src={menu} alt="" />
      <img className={style.nav_logo} src={logo} alt="" />
      <NavItem isLogin={true} />
    </div>
  );
};
