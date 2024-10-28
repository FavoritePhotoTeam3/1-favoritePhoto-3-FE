import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APIrequestPending, completeAuth } from "../../route/auth/authSlice";
import { USERS } from "../../api/users";
import { setErrorMessage } from "./loginSlice";

export const useLoginQuery = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const login = async ({ email, password }) => {
    dispatch(APIrequestPending({ isPending: true }));

    try {
      const response = await USERS.post("/login", {
        email,
        password,
      });

      dispatch(completeAuth(response.data));
      queryClient.setQueryData(["user"], response.data);

      dispatch(APIrequestPending({ isPending: false }));
      nav("/");
    } catch (e) {
      const {
        status,
        data: {
          data: { message },
        },
      } = e.response;

      if (status === 404) {
        dispatch(setErrorMessage({ message, column: "email" }));
        dispatch(APIrequestPending({ isPending: false }));
      }
      if (status === 401) {
        console.log(message);
        dispatch(setErrorMessage({ message, column: "password" }));
        dispatch(APIrequestPending({ isPending: false }));
      }
    }
  };

  return { login };
};
