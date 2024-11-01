import { useMutation } from "@tanstack/react-query";
import { SHOP } from "@api/shop";

// POST 요청 함수
const postCardToShop = async (cardData) => {
  try {
    const response = await SHOP.post("", cardData);
    return response.data;

  } catch (error) {
    // 에러 로깅
    console.error("POST 요청 실패:", error);
    // 에러 메시지를 전달하도록 Promise.reject 호출
    throw new Error(error.response?.data?.message || "요청 중 문제가 발생했습니다.");
  }
};

// usePostShopData 훅 정의
export const usePostCardToShop = () => {
  return useMutation({
    mutationFn: postCardToShop,
    onSuccess: (data) => {
      console.log("요청 성공:", data);
      // alert("임시 메세지 : 판매 등록 성공했습니다");
    },
    onError: (error) => {
      console.error("요청 실패:", error.message);
      // alert(`임시 메세지 : 판매 등록 실패 : ${error.message}`);
    },
  });
};