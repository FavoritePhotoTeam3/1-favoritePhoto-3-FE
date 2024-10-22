import axios from "axios";

export const USERS = axios.create({
  baseURL: process.env.REACT_APP_URL + "/users",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export async function postRefreshToken() {
  const response = await USERS.get("/refresh-token");
  return response;
}

USERS.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    //토큰이 만료되을 때
    if (status === 401) {
      try {
        const response = await postRefreshToken();
        if (response.status === 200) {
          const originRequest = config;
          await axios(originRequest);
          return (window.location.href = "/");
        }
      } catch (e) {
        if (e.response.status === 403) {
          console.log(e.response.data.message);
          return;
        } else {
          console.log(e.response.data.message);
          return;
        }
      }
    }
    return Promise.reject(error);
  }
);


export const SHOP = axios.create({
  baseURL: process.env.REACT_APP_URL + '/shop',
  headers: {
    'Content-Type': 'application/json',
  },
});


// 요청 인터셉터 추가 (API 요청 전 URL 확인)
SHOP.interceptors.request.use((config) => {
  console.log(`Final API URL: ${config.baseURL}${config.url}`);
  return config;
}, (error) => {
  return Promise.reject(error);
});