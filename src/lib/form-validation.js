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

export const minMaxLength = minMaxLengthTemplate(6, 32);
export const minMaxLengthPassword = minMaxLengthPasswordTemplate(8, 64);

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

export const validateSubmit = values => {
  return sleep(1000).then(() => {
    if (['w@w.w'].includes(values.email)) {
      throw new SubmissionError({
        email: 'Email already registered',
        _error: 'There was a problem with the form, please review the messages below.',
      });
    }
  });
};

// Async blur validation
export const validateEmailAsync = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    if (['abc123'].includes(values.username)) {
      throw { username: 'That username is taken. Try another.' }; // eslint-disable-line no-throw-literal
    }
  });
};
