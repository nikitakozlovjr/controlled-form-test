export default (state) => {
  const validateName = state.inputName.validate;
  const validateEmail = state.inputEmail.validate;

  return [validateName, validateEmail].every((validate) => validate);
};
