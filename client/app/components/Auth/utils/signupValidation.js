const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

function validateInput(data) {
  const errors = {};
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 70 })) {
    errors.password = 'the password characters must be more than 6';
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password must match';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateInput;
