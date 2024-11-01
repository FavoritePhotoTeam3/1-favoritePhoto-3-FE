import { axiosInstance } from "../../api/axios";

export const updatePhotoCard = async (shopId, cardId, data) => {
  try {
    const response = await axiosInstance.patch(
      `/shop/cards/${shopId}/${cardId}`,
      data
    );

    if (response.status === 200) {
      return { success: true, data: response.data };
    }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const errorMessage = error.response.data.message;

      if (status === 403) {
        throw new Error("권한이 없습니다. 수정할 수 없습니다.");
      } else if (status === 500 && errorMessage.includes("Shop with ID")) {
        throw new Error("해당 포토카드를 찾을 수 없습니다.");
      } else if (status === 500 && errorMessage.includes("Not enough cards")) {
        throw new Error("판매할 수량이 잔여 수량보다 많습니다.");
      } else {
        throw new Error(
          errorMessage || "수정 요청 처리 중 문제가 발생했습니다."
        );
      }
    } else {
      throw new Error("서버와 통신 중 문제가 발생했습니다.");
    }
  }
};
