import { USERS } from "../api/axios";

export const getUser = async () => {
  let nextUser = null;
  try {
    const response = await USERS.get("/me");
    nextUser = response.data;
  } catch (e) {
    console.log(e.data.data?.message, "/context/authProvider/getUser");
  } finally {
    return nextUser;
  }
};
