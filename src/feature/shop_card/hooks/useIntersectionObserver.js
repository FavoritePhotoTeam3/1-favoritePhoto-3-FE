import { useEffect } from "react";

export const useIntersectionObserver = (
  loadMoreRef,
  hasNextPage,
  fetchNextPage,
  { log = false } = {} // threshold와 log만 매개변수로 사용
) => {
  useEffect(() => {
    // ref를 변수에 저장하여 클린업에서 안전하게 사용
    const targetElement = loadMoreRef.current;
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 첫 번째 옵저빙된 요소 가져오기
        const entry = entries[0];

        if (entry.isIntersecting) {
          if (log)
            console.log("Observed element가 뷰포트에 들어옴:", entry.target);

          // 다음 페이지가 있나 없나 확인하고 로깅하면서 페칭
          if (hasNextPage) {
            if (log) console.log("Fetching the next page...");
            fetchNextPage();
          } else {
            if (log) console.log("No more pages to fetch.");
          }
        } else {
          if (log)
            console.log(
              "Observed element가 아직 뷰표트에 들어오지 않음:",
              entry.target
            );
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (targetElement) {
      if (log) console.log("Observing element 추가:", targetElement);
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
        if (log) console.log("observing 종료:", targetElement);
      }
    };
  }, [hasNextPage, fetchNextPage, loadMoreRef, log]);
};
