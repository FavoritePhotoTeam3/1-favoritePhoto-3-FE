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
    email: { isNotNull: false, validation: true, errorMessage: "" },
    password: { isNotNull: false, validation: true, errorMessage: "" },
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    loginPageInit(state, action) {
      return initialState;
    },
    loginPageReset(state, action) {
      return null;
    },
    loginInputAndValidation(state, action) {
      const { name, value } = action.payload;
      state.loginForm = { ...state.loginForm, [name]: value };
      state.loginValidation[name] = {
        ...state.loginValidation[name],
        isNotNull: isNotNull(value),
        errorMessage: "",
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
    setErrorMessage(state, action) {
      const { message, column } = action.payload;
      state.loginValidation[column].errorMessage = message;
      state.loginValidation[column].validation = false;
    },
    formReset(state, _) {
      state.loginForm = { ...initialState.loginForm };
      state.loginValidation = { ...initialState.loginValidation };
    },
  },
});

export const {
  loginPageInit,
  loginPageReset,
  loginInputAndValidation,
  setErrorMessage,
  formReset,
} = loginSlice.actions;
