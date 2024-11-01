import { axiosInstance } from "../../api/axios";

export const fetchSellerCardDetails = async (shopId) => {
  const response = await axiosInstance.get(`/shop/cards/${shopId}`);
  return response.data;
};

export const fetchExchangeCards = async (shopId) => {
  const response = await axiosInstance.get(`/shop/cards/${shopId}/exchange`);
  return response.data;
};

export const cancelSelling = async (shopId) => {
  try {
    const response = await axiosInstance.delete(`/shop/cards/${shopId}`);
    if (response.status === 200) {
      return { success: true, message: response.data.message };
    }
  } catch (error) {
    if (error.response) {
      return { success: false, error: error.response.data.message };
    } else {
      return { success: false, error: "서버와 통신 중 문제가 발생했습니다." };
    }
  }
};

export const refuseExchange = async (exchangeId) => {
  try {
    const response = await axiosInstance.post(`/exchange/${exchangeId}/refuse`);
    if (response.status === 200) {
      return { success: true, message: response.data.message };
    }
  } catch (error) {
    if (error.response) {
      return { success: false, error: error.response.data.message };
    } else {
      return { success: false, error: "서버와 통신 중 문제가 발생했습니다." };
    }
  }
};

export const acceptExchange = async (exchangeId) => {
  try {
    const response = await axiosInstance.post(`/exchange/${exchangeId}/accept`);
    if (response.status === 200) {
      return { success: true, data: response.data };
    }
  } catch (error) {
    if (error.response) {
      return { success: false, error: error.response.data.message };
    } else {
      return { success: false, error: "서버와 통신 중 문제가 발생했습니다." };
    }
  }
};
