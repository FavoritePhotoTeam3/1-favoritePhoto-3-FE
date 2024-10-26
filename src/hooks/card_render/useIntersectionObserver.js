import { useRef } from "react";

export const useIntersectionObserver = (
  fetchNextPage,
  hasNextPage,
  isFetching,
  cards,
  triggerCardIndex,
) => {
  const lastObservedElement = useRef(null); // 마지막으로 관찰한 요소를 추적

  const setupObserver = () => {
    console.log("＠＠＠ 옵저버 로그 : 옵저버 설정 훅 실행");
    if (!hasNextPage || isFetching || cards.length === 0) {
      if (lastObservedElement.current) {
        // 만약 이전에 설정된 옵저버가 있으면 이전에 설정된 옵저버 해제
        console.log("＠＠＠ 옵저버 로그 : 옵저버 해제", lastObservedElement.current);
        lastObservedElement.current.disconnect();
      }
      return;
    }

    const targetIndex =
      cards.length - triggerCardIndex >= 0
        ? cards.length - triggerCardIndex + 1
        : 0; // 뒤에서 설정된 기준 카드
    const targetCard = document.querySelector(
      `#observeSelector > :nth-child(${targetIndex})`
    ); // nth-child는 1-based 인덱스이므로 +1

    if (lastObservedElement.current) {
      // 이전에 설정된 옵저버 해제
      console.log("＠＠＠ 옵저버 로그 : 옵저버 해제");
      lastObservedElement.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(
            "＠＠＠ 옵저버 로그 : 관찰 대상이 보임, 다음 페이지 요청"
          );
          fetchNextPage(); // 다음 페이지 데이터 요청
        }
      },
      {
        root: null, // viewport를 root로 설정
        rootMargin: "0px",
        threshold: 1, // 요소가 100% 보일 때 트리거
      }
    );

    if (targetCard) {
      observer.observe(targetCard); // 기준 카드 요소에 옵저버 설정
      lastObservedElement.current = observer; // 새로 설정된 옵저버를 추적
      console.log("＠＠＠ 옵저버 설정 대상: ", targetCard); // 설정 대상 로그
    }
  };

  return { setupObserver };
};
