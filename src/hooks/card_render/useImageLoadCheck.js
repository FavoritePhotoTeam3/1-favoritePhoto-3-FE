import { useRef } from "react";

export const useImageLoadCheck = (onImagesLoaded) => {
  const imagesChecked = useRef(false); // 첫 페이지에서만 이미지 체크
  const listenersAdded = useRef(false); // 이벤트 리스너가 추가된 상태를 추적

  const checkImagesLoaded = () => {
    if (imagesChecked.current) {
      console.log("★ ★ 이미지 체크 스킵", imagesChecked.current);
      return; // 이미 체크된 경우 스킵
    }

    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const handleLoad = (img) => {
      loadedImages++;
      img.removeEventListener("load", () => handleLoad(img)); // 로드 후 리스너 제거

      if (loadedImages === images.length) {
        imagesChecked.current = true; // 이미지 로딩 체크 완료
        listenersAdded.current = false; // 리스너가 더 이상 필요하지 않음을 표시
        onImagesLoaded(); // 이미지가 모두 로드되면 콜백 실행
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedImages++;
      } else if (!listenersAdded.current) {
        // 리스너가 추가되지 않은 경우에만 리스너 추가
        img.addEventListener("load", () => handleLoad(img));
      }
    });

    if (loadedImages === images.length) {
      imagesChecked.current = true; // 모든 이미지가 이미 로드된 상태라면 체크 완료
      onImagesLoaded(); // 즉시 콜백 실행
    }

    listenersAdded.current = true; // 리스너가 추가되었음을 표시
  };

  return { checkImagesLoaded };
};