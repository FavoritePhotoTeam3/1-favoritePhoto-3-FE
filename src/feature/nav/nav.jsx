import style from "./nav.module.css";
import logo from "./assets/logo.png";
import notice from "./assets/notice.png";
import menu from "./assets/menu.png";
import verLine from "./assets/verLine.png";
import arrow from "./assets/arrow.png";
import myLogo from "./assets/myLogo.png";
import pointBox from "./assets/box2.png";

import { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notice from "../../components/modals/notice/notice";
import Profile from "../../components/modals/profile/profile";
import { useLogoutQuery } from "./logoutQuery";
import { randomModalController } from "../randomPoint/randomPointSlice";

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
  const dispatch = useDispatch();
  const randomPointHandler = () => {
    dispatch(randomModalController());
  };
  const [noticeOpen, setNoticeOpen] = useState(false);
  const { user, isLogged } = useSelector((state) => state.auth);
  const canGetPoint = useSelector(
    (state) => state.randomPoint?.modal.canGetPoint
  );
  const { logout } = useLogoutQuery();

  if (isLogged && user) {
    return (
      <div className={style.nav_item_container}>
        {canGetPoint ? (
          <img
            onClick={randomPointHandler}
            className={style.nav_item_randomPoint}
            src={pointBox}
            alt=""
          />
        ) : (
          ""
        )}
        <span className={style.nav_item_point}>{user.point}P</span>
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
        <Profile
          user={user}
          isOpen={profileOpen}
          openProfile={setProfileOpen}
        />
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
