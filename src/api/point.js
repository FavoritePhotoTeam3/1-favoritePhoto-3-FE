import axios from "axios";

export const POINT = axios.create({
  baseURL: process.env.REACT_APP_URL + "/point",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

POINT.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
