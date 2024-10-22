import { useDispatch, useSelector } from "react-redux";
import { InputEmail } from "../../components/common/input_normal/inputEmail";
import { signupInputAndValidation } from "./signupSlice";

const SignupEmailInput = () => {
  const emailValidation = useSelector(
    (state) => state.signup.signupValidation.email
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupInputAndValidation({ name, value }));
  };
  return <InputEmail onChange={handleChange} validation={emailValidation} />;
};

export default SignupEmailInput;
