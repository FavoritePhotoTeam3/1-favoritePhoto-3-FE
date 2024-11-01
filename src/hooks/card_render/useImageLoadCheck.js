import { useRef } from "react";

export const useImageLoadCheck = (onImagesLoaded) => {
  const log = false
  const listenersAdded = useRef(false); // 이벤트 리스너가 추가된 상태를 추적

  const checkImagesLoaded = () => {
    const picture = document.querySelectorAll("picture");
    let loadedImages = 0;

    const handleLoad = (event) => {
      loadedImages++;
      log && console.log(`이미지 로드됨: ${loadedImages}/${picture.length}`);

      event.target.removeEventListener("load", handleLoad); // 로드 후 리스너 제거

      if (loadedImages === picture.length) {
        log && console.log("모든 이미지 로딩 완료.");
        listenersAdded.current = false; // 리스너가 더 이상 필요하지 않음을 표시
        onImagesLoaded(); // 이미지가 모두 로드되면 콜백 실행
      }
    };

    picture.forEach((picture) => {
      const img = picture.querySelector("img");
      if (img.complete) {
        loadedImages++;
        log && console.log(`이미 로드된 이미지: ${loadedImages}/${picture.length}`);
      } else if (!listenersAdded.current) {
        log && console.log("이미지 로드 리스너 추가");
        img.addEventListener("load", handleLoad); // 리스너가 추가되지 않은 경우에만 리스너 추가
      }
    });

    if (loadedImages === picture.length) {
      log && console.log("모든 이미지가 이미 로드된 상태입니다.");
      onImagesLoaded(); // 즉시 콜백 실행
    }

    listenersAdded.current = true; // 리스너가 추가되었음을 표시
  };

  return { checkImagesLoaded };
};
