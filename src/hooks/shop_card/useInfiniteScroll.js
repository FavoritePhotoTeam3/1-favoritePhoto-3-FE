import { useEffect } from "react";

export const useInfiniteScroll = (loadMoreRef, hasNextPage, fetchNextPage, { log = false } = {}) => {
  useEffect(() => {
    if (!loadMoreRef.current) {
      log && console.log("＠ 옵저버 로그 : loadMoreRef가 설정되지 않음.");
      return;
    }

    const targetElement = loadMoreRef.current;
    log && console.log("＠ 옵저버 로그 : loadMoreRef가 가리키는 요소:", targetElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          log && console.log("＠ 옵저버 로그 : Observed element가 뷰포트에 들어옴:", entry.target);
          if (hasNextPage) {
            log && console.log("＠ 옵저버 로그 : Fetching the next page...");
            fetchNextPage();
          } else {
            log && console.log("＠ 옵저버 로그 : No more pages to fetch.");
          }
        }
      },
      { threshold: 0.5 } // 요소가 50%만 보여도 트리거됨
    );

    observer.observe(targetElement);
    log && console.log("＠ 옵저버 로그 : Observing element 추가:", targetElement);

    // 요소가 이미 뷰포트에 있을 경우 트리거
    if (targetElement && targetElement.getBoundingClientRect().top < window.innerHeight) {
      log && console.log("＠ 옵저버 로그 : 요소가 이미 뷰포트에 있음, 즉시 트리거");
      fetchNextPage();
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
        log && console.log("＠ 옵저버 로그 : observing 종료:", targetElement);
      }
    };
  }, [hasNextPage, fetchNextPage, loadMoreRef, log]);
};



// import { useEffect } from "react";

// export const useInfiniteScroll = (
//   loadMoreRef,
//   hasNextPage,
//   fetchNextPage,
//   { log = false } = {} 
// ) => {
//   useEffect(() => {

//     // useEffect 타이밍을 맞추기 위해 어쩔 수 없이 callback 함수로 바꾸고 옵저버 등록을 지연
//     const observerCallback = () => {
//       const targetElement = loadMoreRef.current;
//       log && console.log("＠ 옵저버 로그 : loadMoreRef가 가리키는 요소:", targetElement); 
//       if (!targetElement) return;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           const entry = entries[0];

//           if (entry.isIntersecting) {
//             log && console.log("＠ 옵저버 로그 : Observed element가 뷰포트에 들어옴:", entry.target);

//             if (hasNextPage) {
//               log && console.log("＠ 옵저버 로그 : Fetching the next page...");
//               fetchNextPage();
//             } else {
//               log && console.log("＠ 옵저버 로그 : No more pages to fetch.");
//             }
//           }
//         },
//         {
//           threshold: 0.5,  // 유연하게 threshold 조정
//         }
//       );

//       if (targetElement) {
//         log && console.log("＠ 옵저버 로그 : Observing element 추가:", targetElement);
//         observer.observe(targetElement);
//       }

//       return () => {
//         if (targetElement) {
//           observer.unobserve(targetElement);
//           log && console.log("＠ 옵저버 로그 : observing 종료:", targetElement);
//         }
//       };
//     };

//     // setTimeout을 사용해 ref가 제대로 설정되었을 때 observer 설정 T-T
//     const timeoutId = setTimeout(observerCallback, 300);  // 500ms 대기

//     return () => clearTimeout(timeoutId);  // 타이머 해제
//   }, [hasNextPage, fetchNextPage, loadMoreRef, log]);
// };
