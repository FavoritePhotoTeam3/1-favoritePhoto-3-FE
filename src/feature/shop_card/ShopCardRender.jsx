import React, { useEffect, useMemo, useRef } from "react";
import style from "./ShopCardRender.module.css";
import SaleCard from "./components/card/SaleCard";

import { useDispatch, useSelector } from "react-redux";
import { setCards } from "./shopCardSlice";

import { useGetCardQuery } from "../../hooks/shop_card/useGetCardQuery";
import { useLogQueryStatus } from "../../hooks/shop_card/useLogQueryStatus";
import { useIntersectionObserver } from "../../hooks/shop_card/useIntersectionObserver";

export const ShopCardRender = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.shop.cards);
  const loadMoreRef = useRef();

  // React Query로 데이터 페치
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    error,
    isLoading,
  } = useGetCardQuery();


  // React Query 상태 로깅 훅 사용
  useLogQueryStatus(
    { data, hasNextPage, isFetchingNextPage, isLoading, isError, error },
    { log: true } // 로그 활성화
  );
  // IntersectionObserver 훅 사용
  useIntersectionObserver(
    loadMoreRef,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    { log: true }
  );

  // redux 업데이트
  useEffect(() => {
    console.log("fetching data... 마운트");
    if (data) {
      console.log("Fetched data:", data.pages);
      dispatch(setCards(data.pages.flatMap((page) => page.list)));
    } else {
      console.log("데이터가 아직 fetch되지 않음");
    }
  }, [data, dispatch]);

  // 렌더링 전 상태 확인
  const renderCards = useMemo(() => {
    console.log("cards 리스트 렌더링:", cards);
    return cards.map((data) => <SaleCard key={data.id} data={data} />);
  }, [cards]);

  return (
    <>
      <section className={style.listRenderContainer}>{renderCards}</section>
      <section className={style.loadMore} ref={loadMoreRef}>
        {isFetchingNextPage && "Loading..."}
      </section>
    </>
  );
};

export default ShopCardRender;
