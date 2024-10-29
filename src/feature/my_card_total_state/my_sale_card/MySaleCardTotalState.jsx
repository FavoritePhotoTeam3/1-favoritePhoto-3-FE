import React from "react";
import style from "@styles/MyCardTotalStateStyle.module.css";
import { useSelector } from "react-redux";

import CardGradeByUser from "../components/CardGradeByUser";

import { useGetMySaleCardTotalSateQuery } from "./useGetMySaleCardTotalSateQuery";

export const  MyCardTotalState = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetMySaleCardTotalSateQuery();

  console.log("data: ", data);
  const nickname = user?.nickname;
  const totalCount = data?.totalCount;
  const gradeData = data?.formattedGradeCounts;

  if (gradeData) {
    console.log("gradeData: ", gradeData);
  }

  return (
    <>
      <section className={style.sectionUserState}>
        <header className={style.SaleState}>
          <p>{`${nickname}님이 판매 중인 포토카드`}</p>
          <p
            className={style.totalPhotoCount}
          >{`(${totalCount}장)`}</p>
        </header>
        <section className={style.gradeContainer}>
          {gradeData?.["COMMON"] && <CardGradeByUser grade="COMMON" count={gradeData["COMMON"]} />}
          {gradeData?.["RARE"] && <CardGradeByUser grade="RARE" count={gradeData["RARE"]} />}
          {gradeData?.["SUPER RARE"] && <CardGradeByUser grade="SUPER RARE" count={gradeData["SUPER RARE"]} />}
          {gradeData?.["LEGENDARY"] && <CardGradeByUser grade="LEGENDARY" count={gradeData["LEGENDARY"]} />}
        </section>
      </section>
    </>
  );
}

export default MyCardTotalState;