import axios from "axios";

export const SHOP = axios.create({
  baseURL: process.env.REACT_APP_URL + '/shop',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});


SHOP.interceptors.request.use((config) => {
  console.log(`Final API URL: ${config.baseURL}${config.url}`);
  return config;
}, (error) => {
  return Promise.reject(error);
});