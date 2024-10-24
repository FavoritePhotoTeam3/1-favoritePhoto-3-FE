import React, { useMemo, useEffect } from "react";
import { useRef, useState } from "react";
import style from "./ShopCardRender.module.css";
import SaleCard from "./components/card/SaleCard";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCards } from "../../feature/shop_card/shopCardSlice";

import { useGetCardQuery } from "../../hooks/shop_card/useGetCardQuery";
import { useInfiniteScroll } from "../../hooks/shop_card/useInfiniteScroll";

const ShopCardRender = () => {
  const [pageSize, setPageSize] = useState(3); // 페이지 크기 상태 임시 관리

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.shop.cards);
  const searchTerm = useSelector((state) => state.shop.searchTerm);
  const filterOptions = useSelector((state) => state.shop.filterOptions);

  // 상태 기반 쿼리 실행
  const { data, fetchNextPage, hasNextPage } = useGetCardQuery(
    pageSize,
    searchTerm,
    filterOptions
  );

  // redux 연동
  useEffect(() => {
    console.log("◆ Card 데이터 useEffect 실행");
    if (data) {
      //lastPage만 넣는 방식
      // const lastPage = data.pages[data.pages.length - 1];
      // dispatch(setCards(lastPage.list)); 
      const mergedData = data.pages.flatMap(page => page.list);
      dispatch(setCards(mergedData)); 
    }
  }, [data, dispatch]);

  const loadMoreRef = useRef();
  useInfiniteScroll(loadMoreRef, hasNextPage, fetchNextPage, { log: true });

  // useEffect(() => {
  //   console.log("◆ Card 데이터 변경되어서 useRef 재설정");
  //   if (cards.length > 0) {
  //     const lastCardElement = document.getElementById(
  //       `card-${cards.length - 1}`
  //     );
  //     if (lastCardElement) {
  //       loadMoreRef.current = lastCardElement;
  //       console.log(
  //         "◆ Card 데이터 변경되어서 useRef 재설정 : ",
  //         loadMoreRef.current
  //       );
  //     }
  //   }
  // }, [cards]);

  const renderCards = useMemo(() => {
    return cards.map((data, index) => {
      return <SaleCard key={data.id} id={`card-${index}`} data={data} />;
    });
  }, [cards]);

  return (
    <>
      <section className={style.listRenderContainer}>
        {renderCards}
      </section>
      <section className={style.loadMore} ref={loadMoreRef}>

      </section>
    </>
  );
};

export default ShopCardRender;
