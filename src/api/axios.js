import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config, // 이것도 살펴봐라.
      response: { status },
    } = error;
    //토큰이 만료되을 때
    if (status === 401) {
      try {
        const response = await axiosInstance.get("/users/refresh-token");
        if (response.status === 200) {
          const originRequest = config;
          const response = await axios(originRequest);
          return response;
        }
      } catch (e) {
        if (e.response.status === 403) {
          localStorage.removeItem("isLogged");
          return null;
        } else {
          return null;
        }
      }
    }

    return Promise.reject(error);
  }
);
