import style from "./notice.module.css";
import arrow from "./assets/arrow.png";

const Notice = () => {
  return (
    <div className={style.notice_Wrapper}>
      <NoticeHeader />
      <BuyItem />
      <TradeItem />
      <SoldOutItem />
      <SucBuhyItem />
      <SucTradeItem />
    </div>
  );
};

export default Notice;

const BuyItem = () => {
  const userName = "기며누";
  const grade = "rare";
  const cardName = "우리집 앞마당";
  const count = 1;
  const hour = 1;
  return (
    <div className={style.notice_item_Container}>
      <p className={style.notice_item_textArea}>
        <span>{userName}님이</span>
        <span>
          {" "}
          [{grade.toUpperCase()} | {cardName}]을{" "}
        </span>
        <spna>{count}장</spna> 구매했습니다.
      </p>
      <span className={style.notice_item_time}>{hour}시간 전</span>
    </div>
  );
};

const TradeItem = () => {
  const userName = "예진쓰";
  const grade = "common";
  const cardName = "스페인 여행";
  const hour = 1;
  return (
    <div className={style.notice_item_Container}>
      <p className={style.notice_item_textArea}>
        <span>{userName}님이</span>
        <span>
          {" "}
          [{grade.toUpperCase()} | {cardName}]의{" "}
        </span>
        포토카드 교환을 제안했습니다.
      </p>
      <span className={style.notice_item_time}>{hour}시간 전</span>
    </div>
  );
};
const SoldOutItem = () => {
  const grade = "legendary";
  const cardName = "우리집 앞마당";
  const hour = 1;
  return (
    <div className={`${style.notice_item_Container} ${style.complete}`}>
      <p className={`${style.notice_item_textArea} ${style.complete}`}>
        <span>
          [{grade.toUpperCase()} | {cardName}]이
        </span>{" "}
        품절되었습니다.
      </p>
      <span className={style.notice_item_time}>{hour}시간 전</span>
    </div>
  );
};

const SucBuhyItem = () => {
  const grade = "rare";
  const cardName = "How Far I'll Go";
  const count = 3;
  const hour = 1;
  return (
    <div className={`${style.notice_item_Container} ${style.complete}`}>
      <p className={`${style.notice_item_textArea} ${style.complete}`}>
        <span>
          [{grade.toUpperCase()} | {cardName}]{count}장을{" "}
        </span>
        성공적으로 구매했습니다.
      </p>
      <span className={style.notice_item_time}>{hour}시간 전</span>
    </div>
  );
};

const SucTradeItem = () => {
  const userName = "예진쓰";
  const grade = "common";
  const cardName = "스페인 여행";
  const hour = 1;
  return (
    <div className={`${style.notice_item_Container} ${style.complete}`}>
      <p className={`${style.notice_item_textArea} ${style.complete}`}>
        <span>{userName}님과의</span>
        <span>
          {" "}
          [{grade.toUpperCase()} | {cardName}]의{" "}
        </span>
        포토카드 교환이 성사되었습니다.
      </p>
      <span className={style.notice_item_time}>{hour}시간 전</span>
    </div>
  );
};

export const NoticeHeader = () => {
  return (
    <div className={style.notice_header_Wrapper}>
      <div className={style.notice_header_Container}>
        <img className={style.notice_header_back} src={arrow} alt="" />
        <span className={style.notice_header_logo}>알림</span>
      </div>
    </div>
  );
};
