import { SubmissionError } from 'redux-form';

// Sync validation
export const required = value => (value ? undefined : 'Please add this info.');

const minMaxLengthTemplate = (min, max) => value =>
  ((value && value.length < min) || value.length > max
    ? `Please use between ${min} and ${max} characters.`
    : undefined);

const minMaxLengthPasswordTemplate = (min, max) => value =>
  ((value && value.length < min) || value.length > max
    ? `Short passwords are easy to guess. Try one with between ${min} and ${max} characters.`
    : undefined);

export const minMaxLengthUsername = minMaxLengthTemplate(6, 32);
export const minMaxLengthPassword = minMaxLengthPasswordTemplate(8, 64);
export const minMaxLengthEmail = minMaxLengthTemplate(5, 254);

// Basic email validation for demo purposes, don't use in production
export const validEmail = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Please try another email address.'
    : undefined);

export const arePasswordsMatching = values => {
  const errors = {};
  if (
    values.password &&
    values.passwordConfirmation &&
    values.password !== values.passwordConfirmation
  ) {
    errors.passwordConfirmation = "These passwords don't match. Try again?";
  }
  return errors;
};

// Simulate server latency
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Async validation on blur
export const validateOnBlurAsync = values => {
  return sleep(200).then(() => {
    if (['chuck123'].includes(values.username)) {
      throw { username: 'That username is taken. Try another.' }; // eslint-disable-line no-throw-literal
    }
    if (['chuck@react.com'].includes(values.email)) {
      throw { email: 'Email already registered.' }; // eslint-disable-line no-throw-literal
    }
  });
};

// submit validation
export const validateSubmit = values => {
  return sleep(1000).then(() => {
    if (values.firstName === 'Chuck' && values.lastName === 'Norris') {
      throw new SubmissionError({
        firstName: 'Chuck Norris can do pair programming with himself.',
        lastName: 'Chuck Norris coded his full-stack web app in Microsoft Paint on an iPhone.',
        _error: 'Chuck Norris has never got an `Uncaught Reference error`. Ever.',
      });
    }
  });
};
