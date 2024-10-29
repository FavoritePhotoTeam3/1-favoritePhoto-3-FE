import { useMutation } from "@tanstack/react-query";
import { SHOP } from "@api/shop";

// DELETE 요청 함수
const deleteCardFromShop = async (shopId) => {
  try {
    const response = await SHOP.delete(`/cards/${shopId}`);
    return response.data;
  } catch (error) {
    console.error("DELETE 요청 실패:", error);
    throw new Error(error.response?.data?.message || "요청 중 문제가 발생했습니다.");
  }
};

// shopId를 인자로 받는 useDeleteCardFromShop 훅 정의
export const useDeleteCardFromShop = (shopId) => {
  return useMutation({
    mutationFn: () => deleteCardFromShop(shopId), // shopId를 전달하여 호출
    onSuccess: (data) => {
      console.log("요청 성공:", data);
      alert("임시 메세지 : 판매 취소에 성공했습니다");
    },
    onError: (error) => {
      console.error("요청 실패:", error.message);
      alert(`임시 메세지 : 판매 취소 실패 : ${error.message}`);
    },
  });
};