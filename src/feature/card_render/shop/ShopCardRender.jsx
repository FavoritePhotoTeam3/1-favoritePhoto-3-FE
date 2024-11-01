import React, { useMemo, useEffect, useState } from "react";
import style from "@styles/CardListRenderStyle.module.css";
import SaleCard from "./components/card/SaleCard";

import { useSelector, useDispatch } from "react-redux";
import { setCards } from "./shopCardSlice";

import { useGetCardQuery } from "@hooks/query/useGetShopCardQuery";
import { useImageLoadCheck } from "@hooks/card_render/useImageLoadCheck"; // 커스텀 훅
import { useIntersectionObserver } from "@hooks/card_render/useIntersectionObserver"; // 커스텀 훅

const ShopCardRender = () => {
  const dispatch = useDispatch();
  const pageSize = 12; // 요청 페이지 사이즈
  const triggerCardIndex = 4; // Ref를 연동할 index
  const cards = useSelector((state) => state.shop.cards);
  const searchTerm = useSelector((state) => state.shop.searchTerm);
  const filterOptions = useSelector((state) => state.shop.filterOptions);

  const [imagesLoadedOnce, setImagesLoadedOnce] = useState(false); // 이미지 로드가 한 번 완료되었는지 상태 추적

  const { data, fetchNextPage, hasNextPage, isError, isFetching, status } =
    useGetCardQuery(pageSize, searchTerm, filterOptions);

  const { checkImagesLoaded } = useImageLoadCheck(() => {
    setImagesLoadedOnce(true); // 이미지 로드가 완료되었음을 상태로 설정
    setupObserver(); // 이미지 로드 후 옵저버 설정
  });

  const { setupObserver } = useIntersectionObserver(
    fetchNextPage,
    hasNextPage,
    isFetching,
    cards,
    triggerCardIndex,
  );

  console.log("◆ Query Status : ", status, " ◆ Data : ", data, " ◆ Error : ", isError);
  
  // 데이터 변경 시 리덕스와 동기화
  useEffect(() => {
    console.log("★★ Query Get Data & 리덕스 연동 : ", data);
    if (data) {
      const mergedData = data.pages.flatMap((page) => page.list);
      dispatch(setCards(mergedData));
    }
  }, [data, dispatch]);

  useEffect(() => {
    console.log("★★★ 검색어나 filter옵션이 변경되어 이미지 체크 리셋");
    setImagesLoadedOnce(false); // 검색어나 필터 옵션 변경 시 이미지 로딩 체크를 다시 시작
  }, [searchTerm, filterOptions]);

  // 첫 로드에서만 이미지 로드 상태 체크 후 옵저버 설정
  useEffect(() => {
    if (cards.length > 0) {
      if (!imagesLoadedOnce) { // 처음 페이지 로딩일 때 이미지 체크 실행
        checkImagesLoaded(); // 이미지 로드 상태 확인 
      } else { // 그 이후에는 이미지 로딩 체크 없이 옵저버만 설정
        setupObserver(); // 이미지 체크가 완료된 후에만 옵저버 설정
      }
    }
  }, [cards, imagesLoadedOnce, checkImagesLoaded, setupObserver]);

  useEffect(() => {
    if (isError) {
      dispatch(setCards([]));
    }
  }, [isError, dispatch]);

  const renderCards = useMemo(() => {
    return cards.map((data) => <SaleCard key={data.id} data={data} />);
  }, [cards]);

  return (
    <>
      <section className={style.listRenderContainer} id="observeSelector">{renderCards}</section>
      {isError && (
        <div className={style.errorContainer}>
          <p>입력하신 조건의 카드를 찾을 수 없습니다.</p>
        </div>
      )}
      <section className={style.space}></section>
    </>
  );
};

export default ShopCardRender;
