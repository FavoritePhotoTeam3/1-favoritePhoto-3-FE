import { createSlice } from "@reduxjs/toolkit";
import { emailValidation, isNotNull } from "../../util/sliceValidation";

const initialState = {
  loginForm: {
    email: "",
    password: "",
  },
  loginValidation: {
    email: true,
    password: true,
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginInputAndValidation(state, action) {
      const { name, value } = action.payload;
      console.log(name, value);
      state.loginForm = { ...state.loginForm, [name]: value };
      state.loginValidation = {
        ...state.loginValidation,
        [name]: isNotNull(value),
      };

      const { email } = state.loginForm;
      state.loginValidation.email = emailValidation(email);
    },
    formReset(state, _) {
      state.loginForm = { email: "", password: "" };
    },
  },
});

export const { loginInputAndValidation, formReset } = loginSlice.actions;
