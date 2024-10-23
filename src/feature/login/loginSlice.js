import { createSlice } from "@reduxjs/toolkit";
import {
  emailValidation,
  isNotNull,
  passwordValidation,
} from "../../util/sliceValidation";

const initialState = {
  loginForm: {
    email: "",
    password: "",
  },
  loginValidation: {
    email: { isNotNull: false, validation: true },
    password: { isNotNull: false, validation: true },
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    pageInit(state, action) {
      return initialState;
    },
    pageReset(state, action) {
      return null;
    },
    loginInputAndValidation(state, action) {
      const { name, value } = action.payload;
      state.loginForm = { ...state.loginForm, [name]: value };
      state.loginValidation[name] = {
        ...state.loginValidation[name],
        isNotNull: isNotNull(value),
      };

      const { email, password } = state.loginForm;

      state.loginValidation.email = {
        ...state.loginValidation.email,
        validation: emailValidation(email),
      };
      state.loginValidation.password = {
        ...state.loginValidation.password,
        validation: passwordValidation(password),
      };
    },
    formReset(state, _) {
      state.loginForm = { ...initialState.loginForm };
      state.loginValidation = { ...initialState.loginValidation };
    },
  },
});

export const { pageInit, pageReset, loginInputAndValidation, formReset } =
  loginSlice.actions;
