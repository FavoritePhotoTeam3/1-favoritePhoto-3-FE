import axios from "axios";

export const USERS = axios.create({
  baseURL: process.env.REACT_APP_URL + "/users",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

USERS.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      try {
        const response = await USERS.get("/refresh-token");
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
