import style from "./nav.module.css";
import logo from "./assets/logo.png";
import notice from "./assets/notice.png";
import menu from "./assets/menu.png";
import verLine from "./assets/verLine.png";
import arrow from "./assets/arrow.png";
import myLogo from "./assets/myLogo.png";
import Notice from "../modals/notice/notice";

import { useState } from "react";
import Profile from "../modals/profile/profile";
import { useAuth } from "../../context/authProvider";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className={style.nav_Wrapper}>
      <div className={style.nav_Container}>
        <img
          onClick={() => {
            setProfileOpen((prev) => !prev);
          }}
          className={style.nav_item_menu}
          src={menu}
          alt=""
        />
        <img className={style.nav_logo} src={logo} alt="" />
        <NavItem profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
      </div>
    </div>
  );
};

const NavItem = ({ profileOpen, setProfileOpen }) => {
  const [noticeOpen, setNoticeOpen] = useState(false);
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className={style.nav_item_container}>
        <span className={style.nav_item_point}>{user.point}</span>
        <img
          onClick={() => {
            setNoticeOpen((prev) => !prev);
          }}
          className={style.nav_item_notice}
          src={notice}
          alt=""
        />
        <img className={style.nav_item_verLine} src={verLine} alt="" />
        <span
          onClick={() => {
            setProfileOpen((prev) => !prev);
          }}
          className={style.nav_item_userName}
        >
          {user.nickname}
        </span>
        <span
          onClick={() => {
            logout();
          }}
          className={style.nav_itme_logout}
        >
          로그아웃
        </span>
        <Notice isOpen={noticeOpen} openNotice={setNoticeOpen} />
        <Profile isOpen={profileOpen} openProfile={setProfileOpen} />
      </div>
    );
  } else {
    return (
      <div className={`${style.nav_item_container} ${style.notLogin}`}>
        <Link to="/login" className={style.nav_item_text}>
          로그인
        </Link>
        <Link to="/signup" className={style.nav_item_text}>
          회원가입
        </Link>
      </div>
    );
  }
};

export const MyPageNav = () => {
  return (
    <div className={style.nav_myPage_Wrapper}>
      <div className={style.nav_myPage_Container}>
        <img className={style.nav_myPage_back} src={arrow} alt="" />
        <img className={style.nav_myPage_logo} src={myLogo} alt="" />
      </div>
    </div>
  );
};
