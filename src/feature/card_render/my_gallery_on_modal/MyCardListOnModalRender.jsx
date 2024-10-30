import React, { useMemo, useEffect, useState } from "react";
import style from "@styles/CardListRenderStyle.module.css";
import MyCardOnModal from "./components/MyCardOnModal";

import { useSelector, useDispatch } from "react-redux";
import { setMyCards, clearState } from "../my_gallery/myGallerySlice";
import { setGiveId } from "@feature/card_state_control/regist_on_modal/MarketModalStateSlice";

import { useGetMyGalleryQuery } from "@hooks/query/useGetMyGalleryQuery";
import { useImageLoadCheck } from "@hooks/card_render/useImageLoadCheck"; // 커스텀 훅
import { useIntersectionObserver } from "@hooks/card_render/useIntersectionObserver"; // 커스텀 훅

const MyCardListOnModalRender = () => {
  const dispatch = useDispatch();
  const limit = 5; // 요청 페이지 사이즈
  const triggerCardIndex = 1; // Ref를 연동할 index -> 마지막에서 몇번째

  const myCards = useSelector((state) => state.myGallery.myCards);
  const keyword = useSelector((state) => state.myGallery.keyword);
  const filterOptions = useSelector((state) => state.myGallery.filterOptions);

  const [imagesLoadedOnce, setImagesLoadedOnce] = useState(false); // 이미지 로드가 한 번 완료되었는지 상태 추적

  // Query훅으로 데이터 요청
  const { data, fetchNextPage, hasNextPage, isError, isFetching } =
    useGetMyGalleryQuery(limit, keyword, filterOptions);

  // 이미지 로드 체크
  const { checkImagesLoaded } = useImageLoadCheck(() => {
    setImagesLoadedOnce(true); // 이미지 로드가 완료되었음을 상태로 설정
    setupObserver(); // 이미지 로드 후 옵저버 설정
  });

  const { setupObserver } = useIntersectionObserver(
    fetchNextPage,
    hasNextPage,
    isFetching,
    myCards,
    triggerCardIndex
  );

  // 데이터 변경 시 리덕스와 동기화
  useEffect(() => {
    if (data) {
      const mergedData = data.pages.flatMap((page) => page.list);
      dispatch(setMyCards(mergedData));
    }
    return () => {
      dispatch(clearState());
    };
  }, [data, dispatch]);

  useEffect(() => {
    setImagesLoadedOnce(false);
  }, [keyword, filterOptions]);

  // 첫 로드에서만 이미지 로드 상태 체크 후 옵저버 설정
  useEffect(() => {
    if (myCards.length > 0) {
      if (!imagesLoadedOnce) {
        checkImagesLoaded();
      } else {
        setupObserver();
      }
    }
  }, [myCards, imagesLoadedOnce, checkImagesLoaded, setupObserver]);

  useEffect(() => {
    if (isError) {
      dispatch(setMyCards([]));
    }
  }, [isError, dispatch]);

  const renderCards = useMemo(() => {
    const handleOnclick = (id) => {
      dispatch(setGiveId(id));
    };

    return myCards.map((data) => (
      <div key={data.id} onClick={() => handleOnclick(data.id)}>
        <MyCardOnModal data={data} />
      </div>
    ));
  }, [myCards, dispatch]);

  return (
    <>
      <section className={style.listRenderOnMoalContainer} id="observeSelector">
        {renderCards}
      </section>
      {isError && (
        <div className={style.errorContainer}>
          <p>입력하신 조건의 카드를 찾을 수 없습니다.</p>
        </div>
      )}
      <section className={style.space}></section>
    </>
  );
};

export default MyCardListOnModalRender;
