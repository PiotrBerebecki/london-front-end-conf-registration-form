import { SubmissionError } from 'redux-form';

// Sync validation
export const required = value => (value ? undefined : 'Required');

const minMaxLength = (min, max) => value =>
  ((value && value.length < min) || value.length > max
    ? `Please use between ${min} and ${max} characters.`
    : undefined);

export const min6Max30Length = minMaxLength(6, 30);

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

// async blur validation
export const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    if (['abc123'].includes(values.username)) {
      throw { username: 'That username is taken. Try another.' }; // eslint-disable-line no-throw-literal
    }
  });
};
