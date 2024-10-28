import axios from "axios";

export const NOTICE = axios.create({
  baseURL: process.env.REACT_APP_URL + "/notifications",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

NOTICE.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
