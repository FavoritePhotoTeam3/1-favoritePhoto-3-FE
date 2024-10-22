import { useDispatch, useSelector } from "react-redux";
import {
  InputPassword,
  InputPasswordConfirm,
} from "../../components/common/input_invisible/inputPassword";
import { signupInputAndValidation } from "./signupSlice";

export const SignpuPasswordInput = () => {
  const password = useSelector((state) => state.signup?.signupForm.password);
  const passwordValidation = useSelector(
    (state) => state.signup?.signupValidation.password.validation
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupInputAndValidation({ name, value }));
  };
  return (
    <InputPassword
      onChange={handleChange}
      validation={passwordValidation}
      value={password}
    />
  );
};

export const SignpuPasswordConfirmInput = () => {
  const passwordConfirm = useSelector(
    (state) => state.signup?.signupForm.passwordConfirm
  );
  const passwordConfirmValidation = useSelector(
    (state) => state.signup?.signupValidation.passwordConfirm.validation
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupInputAndValidation({ name, value }));
  };
  return (
    <InputPasswordConfirm
      onChange={handleChange}
      validation={passwordConfirmValidation}
      value={passwordConfirm}
    />
  );
};
