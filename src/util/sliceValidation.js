export const emailValidation = (email) => {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  if (!emailRegEx.test(email) && email) {
    return false;
  } else {
    return true;
  }
};

export const passwordValidation = (password, passwordConfirm) => {
  if (!(password === passwordConfirm) && passwordConfirm) {
    return false;
  } else {
    return true;
  } // 비밀번호 일치 여부 검시.
};

export const isNotNull = (value) => {
  if (!value) {
    return false;
  } else {
    return true;
  }
};
