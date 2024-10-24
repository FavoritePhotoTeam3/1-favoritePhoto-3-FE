import { axiosInstance } from "../api/axios";

export const getUser = async () => {
  console.log("너무 힘들다 시온아.");
  let nextUser = null;
  try {
    const response = await axiosInstance.get("/users/me");
    nextUser = response.data;
  } catch (e) {
    console.log(e.data.data?.message, "/context/authProvider/getUser");
  } finally {
    return nextUser;
  }
};
