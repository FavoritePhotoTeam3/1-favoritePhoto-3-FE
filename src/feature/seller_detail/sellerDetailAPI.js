import { axiosInstance } from "../../api/axios";

export const fetchSellerCardDetails = async (shopId) => {
  const response = await axiosInstance.get(`/shop/cards/${shopId}`);
  return response.data;
};

export const fetchExchangeCards = async (shopId) => {
  const response = await axiosInstance.get(`/shop/cards/${shopId}/exchange`);
  return response.data;
};
