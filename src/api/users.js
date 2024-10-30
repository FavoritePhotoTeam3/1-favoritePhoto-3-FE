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
      response: {
        status,
        data: { RequestURL },
      },
    } = error;
    if (status === 401 && RequestURL !== "/users/login") {
      //인터셉터 적용범위 주의하자. 상태코드 만으로는 충분히 식별하기 힘들다.
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


USERS.interceptors.request.use((config) => {
  console.log(`Final API URL: ${config.baseURL}${config.url}`);
  return config;
}, (error) => {
  return Promise.reject(error);
});