import axios from "axios";
import { axiosInstance } from "./axios";

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
  async (error) => {
    console.log(error);
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      try {
        const response = await axiosInstance.get("/users/refresh-token");
        if (response.status === 200) {
          const originRequest = config;
          await axios(originRequest);
          return window.location.reload();
        }
      } catch (e) {
        if (e.response.status === 403) {
          localStorage.removeItem("isLogged");
          return window.location.reload();
        } else {
          return window.location.reload();
        }
      }
    } else {
      return window.location.reload();
    }

    return Promise.reject(error);
  }
);
