import { createSlice } from "@reduxjs/toolkit";
import {
  emailValidation,
  isNotNull,
  passwordValidation,
} from "../../util/sliceValidation";

const initialState = {
  signupForm: {
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  },
  signupValidation: {
    email: true,
    nickname: true,
    password: true,
    passwordConfirm: true,
  },
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupInputAndValidation(state, action) {
      const { name, value } = action.payload;
      state.signupForm = { ...state.signupForm, [name]: value };
      state.signupValidation = {
        ...state.signupValidation,
        [name]: isNotNull(value),
      };

      const { email, password, passwordConfirm } = state.signupForm;
      state.signupValidation.email = emailValidation(email);
      state.signupValidation.passwordConfirm = passwordValidation(
        password,
        passwordConfirm
      );
      //추후에 비슷한 방식으로 유효성 검사 로직 추가.
    },
    formReset(state, _) {
      state.signupForm = {
        email: "",
        nickname: "",
        password: "",
        passwordConfirm: "",
      };
    },
  },
});

export const { signupInputAndValidation, formReset } = signupSlice.actions;
