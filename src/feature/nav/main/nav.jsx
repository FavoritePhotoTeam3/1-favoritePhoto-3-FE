import style from "./nav.module.css";
import logo from "./assets/logo.png";
import notice from "./assets/notice.png";
import menu from "./assets/menu.png";
import verLine from "./assets/verLine.png";
import arrow from "./assets/arrow.png";
import myLogo from "./assets/myLogo.png";
import pointBox from "./assets/box2.png";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutQuery } from "./logoutQuery";
import { randomModalController } from "../../randomPoint/randomPointSlice";
import NavNotice from "./nav_notice";
import { noticeModalController } from "../../../route/notice/noticeSlice";
import NavProfile from "./nav_profile";

export const Nav = () => {
  const nav = useNavigate();
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
        <img
          onClick={() => {
            nav("/");
          }}
          className={style.nav_logo}
          src={logo}
          alt=""
        />
        <NavItem profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
        <div className={style.nav_itme_dummy}></div>
        {/**정렬을 위한 더미 태그 입니다. */}
      </div>
    </div>
  );
};

const NavItem = ({ profileOpen, setProfileOpen }) => {
  const dispatch = useDispatch();
  const randomPointHandler = () => {
    dispatch(randomModalController());
  };
  const noticeHandler = () => {
    dispatch(noticeModalController());
  };
  const non_read = useSelector((state) => state.notice?.non_read);

  const { user, isLogged } = useSelector((state) => state.auth);

  const canGetPoint = useSelector(
    (state) => state.randomPoint?.modal.canGetPoint
  );
  const { logout } = useLogoutQuery();

  if (isLogged && user) {
    const point = user.point >= 10000 ? "9999+" : user.point;
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
        <span className={style.nav_item_point}>{point}P</span>
        <div className={style.nav_item_notice_Container}>
          {non_read ? (
            <div
              className={`${style.nav_item_notice_count} ${
                non_read > 0 ? "" : "none"
              }`}
            >
              {non_read > 99 ? "99+" : non_read}
            </div>
          ) : null}
          <img
            onClick={noticeHandler}
            className={style.nav_item_notice}
            src={notice}
            alt=""
          />
        </div>
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
        <NavNotice />
        <NavProfile
          user={user}
          isOpen={profileOpen}
          openProfile={setProfileOpen}
        />
      </div>
    );
  } else {
    return (
      <>
        <div className={`${style.nav_item_container} ${style.notLogin}`}>
          <Link to="/login" className={style.nav_item_text}>
            로그인
          </Link>
          <Link to="/signup" className={style.nav_item_text}>
            회원가입
          </Link>
        </div>
        <NavProfile
          user={user}
          isOpen={profileOpen}
          openProfile={setProfileOpen}
        />
      </>
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
