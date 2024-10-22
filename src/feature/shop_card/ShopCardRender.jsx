import React, { useEffect, useMemo, useRef } from "react";
import style from "./ShopCardRender.module.css";
import SaleCard from "./components/card/SaleCard";

import { useDispatch, useSelector } from "react-redux";
import { setCards } from "./shopCardSlice";

import { useGetCardQuery } from "./useGetCardQuery";
import { useLogQueryStatus } from './hooks/useLogQueryStatus';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

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
    { hasNextPage, isFetchingNextPage, isLoading, isError, error },
    { log: false } // 로그 활성화
  );
  // IntersectionObserver 훅 사용
  useIntersectionObserver(loadMoreRef, hasNextPage, fetchNextPage, { log: false });

  // redux 업데이트
  useEffect(() => {
    if (data) {
      console.log("Fetched data:", data.pages);
      dispatch(setCards(data.pages.flatMap((page) => page)));
    } else {
      console.log("No data fetched yet");
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
