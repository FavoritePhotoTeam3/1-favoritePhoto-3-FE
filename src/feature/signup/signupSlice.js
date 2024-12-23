import { createSlice } from "@reduxjs/toolkit";
import {
  emailValidation,
  isNotNull,
  nicknameValidation,
  passwordEqualValidation,
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
    email: { isNotNull: false, validation: true, errorMessage: "" },
    nickname: { isNotNull: false, validation: true, errorMessage: "" },
    password: { isNotNull: false, validation: true },
    passwordConfirm: { isNotNull: false, validation: true },
  },
};

export const signupSlice = createSlice({
  name: "signup",
  initialState: null,
  reducers: {
    signupPageInit(state, action) {
      return initialState;
    },
    signupPageReset(state, action) {
      return null;
    },
    signupInputAndValidation(state, action) {
      const { name, value } = action.payload;
      state.signupForm = { ...state.signupForm, [name]: value };
      state.signupValidation[name] = {
        ...state.signupValidation[name],
        isNotNull: isNotNull(value),
        errorMessage: "",
      };

      const { email, nickname, password, passwordConfirm } = state.signupForm;

      state.signupValidation.email = {
        ...state.signupValidation.email,
        validation: emailValidation(email),
      };
      state.signupValidation.nickname = {
        ...state.signupValidation.nickname,
        validation: nicknameValidation(nickname),
      };
      state.signupValidation.password = {
        ...state.signupValidation.password,
        validation: passwordValidation(password),
      };
      state.signupValidation.passwordConfirm = {
        ...state.signupValidation.passwordConfirm,
        validation: passwordEqualValidation(password, passwordConfirm),
      };
      //추후에 비슷한 방식으로 유효성 검사 로직 추가.
    },
    setErrorMessage(state, action) {
      const { message, column } = action.payload;
      state.signupValidation[column].errorMessage = message;
      state.signupValidation[column].validation = false;
    },
    formReset(state, _) {
      state.signupForm = {
        ...initialState.signupForm,
      };
      state.signupValidation = { ...initialState.signupValidation };
    },
  },
});

export const {
  signupPageInit,
  signupPageReset,
  signupInputAndValidation,
  setErrorMessage,
  formReset,
} = signupSlice.actions;
