import { USERS } from "../../api/users";

export const getUser = async () => {
  const response = await USERS.get("/me");
  return response.data;
};
