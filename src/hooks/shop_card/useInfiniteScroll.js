import { useEffect, useRef } from "react";

export const useInfiniteScroll = (hasNextPage, fetchNextPage, { log = false } = {}) => {
  const loadMoreRef = useRef(); // useRef 생성

  useEffect(() => {
    const targetElement = loadMoreRef.current; // ref 값을 변수로 저장
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          log && console.log("Observed element가 뷰포트에 들어옴:", entries[0].target);
          if (hasNextPage) {
            log && console.log("Fetching the next page...");
            fetchNextPage();
          } else {
            log && console.log("No more pages to fetch.");
          }
        }
      },
      { threshold: 1.0 } // threshold 설정
    );

    observer.observe(targetElement); // targetElement로 관찰

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement); // cleanup에서 이전의 targetElement 사용
        log && console.log("observing 종료:", targetElement);
      }
    };
  }, [hasNextPage, fetchNextPage, log]); // loadMoreRef를 의존성 배열에 포함하지 않음

  return loadMoreRef; // ref 반환
};
