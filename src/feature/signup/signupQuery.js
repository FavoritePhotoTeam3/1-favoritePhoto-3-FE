import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APIrequestPending } from "../../route/authSlice";
import { setErrorMessage } from "./signupSlice";
import { axiosInstance } from "../../api/axios";

export const useSignupQuery = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const signup = async ({ email, password, nickname }) => {
    dispatch(APIrequestPending({ isPending: true }));
    try {
      await axiosInstance.post("/users/signup", {
        email,
        password,
        nickname,
      });
      dispatch(APIrequestPending({ isPending: false }));
      alert("회원가입 완료");
      nav("/");
    } catch (e) {
      const {
        response: {
          status,
          data: {
            data: { message, column },
          },
        },
      } = e;
      if (status === 422) {
        dispatch(setErrorMessage({ message, column }));
        dispatch(APIrequestPending({ isPending: false }));
        return;
      } else {
        dispatch(setErrorMessage(message, column));
        alert("오류!");
      }
    }
  };

  return { signup };
};
