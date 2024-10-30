import { useSelector } from "react-redux";
import style from "./profile.module.css";
import { useLogoutQuery } from "../../../feature/nav/main/logoutQuery";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, isOpen, openProfile }) => {
  const nav = useNavigate();
  const { logout } = useLogoutQuery();
  const isLogin = useSelector((state) => state.auth?.isLogged);
  const close = isOpen ? "" : "close";
  if (isLogin && user) {
    return (
      <div
        onClick={() => {
          openProfile((prev) => !prev);
        }}
        className={`${style.profile_Wrapper} ${style[close]}`}
      >
        <div className={style.profile_Container}>
          <div className={style.profile_info_Container}>
            <div className={style.profile_topArea}>
              <p className={style.top_helloUser}>
                안녕하세요, <span>{user.nickname}</span>님!
              </p>
              <div className={style.top_point_Wrapper}>
                <span className={style.top_point_text}>보유 포인트</span>
                <span className={`${style.top_point_text} ${style.point}`}>
                  {user.point}p
                </span>
              </div>
            </div>
            <div className={style.profile_bottomArea}>
              <span
                onClick={() => {
                  window.location.href = "/mygallery";
                }}
                className={style.bottom_text}
              >
                마이갤러리
              </span>
              <span
                onClick={() => {
                  window.location.href = "/myshop";
                }}
                className={style.bottom_text}
              >
                나의 판매 포토카드
              </span>
            </div>
          </div>
          <span
            onClick={() => {
              logout();
            }}
            className={style.logout}
          >
            로그아웃
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          openProfile((prev) => !prev);
        }}
        className={`${style.profile_Wrapper} ${style[close]}`}
      >
        <div className={style.profile_Container}>
          <div className={style.profile_bottomArea}>
            <span
              onClick={() => {
                nav("/login");
              }}
              className={style.bottom_text}
            >
              로그인
            </span>
            <span
              onClick={() => {
                nav("/signup");
              }}
              className={style.bottom_text}
            >
              회원가입
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
