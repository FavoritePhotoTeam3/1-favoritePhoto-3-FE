import style from "./notice.module.css";
import arrow from "./assets/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { noticeModalController } from "../../../route/notice/noticeSlice";

const Notice = () => {
  const notices = useSelector((state) => state.notice?.notices);
  const isOpen = useSelector((state) => state.notice?.isOpen);
  const close = isOpen ? "" : "close";

  console.log(notices);
  return (
    <div className={`${style.notice_Wrapper} ${style[close]}`}>
      <NoticeHeader />
      {notices?.length > 0
        ? notices.map((notice, index) => (
            <CardItem key={index} notice={notice} />
          ))
        : null}
      {/* <BuyItem />
      <TradeItem />
      <SoldOutItem />
      <SucBuhyItem />
      <SucTradeItem /> */}
    </div>
  );
};

export default Notice;

const CardItem = ({ notice }) => {
  const { content, read, timeAgo } = notice;

  return (
    <div className={style.notice_item_Container}>
      <p className={style.notice_item_textArea}>{content}</p>
      <span className={style.notice_item_time}>{timeAgo}</span>
    </div>
  );
};

const NoticeHeader = () => {
  const dispatch = useDispatch();
  const noticeHandler = () => {
    dispatch(noticeModalController());
  };
  return (
    <div className={style.notice_header_Wrapper}>
      <div className={style.notice_header_Container}>
        <img
          onClick={noticeHandler}
          className={style.notice_header_back}
          src={arrow}
          alt=""
        />
        <span className={style.notice_header_logo}>알림</span>
      </div>
    </div>
  );
};
