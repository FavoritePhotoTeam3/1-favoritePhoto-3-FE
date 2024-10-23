import { axiosInstance } from "../../api/axios";

export const fetchBuyerCardDetails = async (shopId) => {
  const response = await axiosInstance.get(`/shop/cards/${shopId}`);
  return response.data;
};

export const fetchExchangeCards = async (shopId) => {
  const response = await axiosInstance.get(`/users/${shopId}/exchange`);
  return response.data;
};
// 구매하기 API
export const purchaseCard = async (shopId, count) => {
  try {
    const response = await axiosInstance.post(`/purchases/${shopId}`, {
      count,
    });

    if (response.status === 201) {
      return { success: true, data: response.data.purchase }; // 성공
    } else if (response.status === 401) {
      return { success: false, error: "Unauthorized" }; // 인증 실패
    } else if (response.status === 500) {
      const error = response.data.message;
      if (error === "Not enough Points") {
        return { success: false, error: "포인트가 부족합니다." };
      } else if (error === "Insufficient stock.") {
        return { success: false, error: "재고가 부족합니다." };
      } else {
        return { success: false, error: "구매 처리 중 오류가 발생했습니다." };
      }
    } else {
      return { success: false, error: "알 수 없는 오류가 발생했습니다." };
    }
  } catch (error) {
    return { success: false, error: "서버와 통신 중 문제가 발생했습니다." };
  }
};
