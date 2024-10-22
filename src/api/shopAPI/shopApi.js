import { SHOP } from "../axios";

export const getShopCards = async ({ pageParam = 1 }) => {
  try {
    const response = await SHOP.get(`/cards?page=${pageParam}`);

    // API 서버 오류 코드
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    return response.data; // 데이터 반환

    // 에러 핸들링 로깅
  } catch (error) {
    console.error("Error in getShopCards function:", error);
    throw error; // 에러를 상위로 전달
  }
};