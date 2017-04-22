import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import './RegistrationForm.css';

import {
  required,
  minMaxLength,
  minMaxLengthPassword,
  validateSubmit,
  validateEmailAsync as asyncValidate,
  arePasswordsMatching as validate,
} from './lib/form-validation';

const renderField = ({
  input,
  id,
  type,
  label,
  meta: { asyncValidating, touched, active, error },
}) => {
  // console.log('asyncValidating', asyncValidating); // todo - show loader
  // when validating username on blur
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...input} name={id} id={id} type={type} placeholder={label} />
      {['username', 'password', 'passwordConfirmation'].includes(id) &&
        touched &&
        !active &&
        error &&
        <span>{error}</span>}
      {!['username', 'password', 'passwordConfirmation'].includes(id) &&
        touched &&
        error &&
        <span>{error}</span>}
    </div>
  );
};

// const renderFieldActive = ({
//   input,
//   id,
//   type,
//   label,
//   meta: { asyncValidating, touched, active, error },
// }) => {
//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <input {...input} name={id} id={id} type={type} placeholder={label} />
//       {['username', 'password', 'passwordConfirmation'].includes(id) && touched && !active && error && <span>{error}</span>}
//       {!['username', 'password', 'passwordConfirmation'].includes(id) && touched && error && <span>{error}</span>}
//     </div>
//   );
// };

class RegistrationForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, error } = this.props;
    return (
      <form onSubmit={handleSubmit(validateSubmit)}>

        {error && <span>{error}</span>}

        <Field
          name="firstName"
          id="firstName"
          component={renderField}
          type="text"
          label="First Name"
          validate={[required]}
        />

        <Field
          name="lastName"
          id="lastName"
          component={renderField}
          type="text"
          label="Last Name"
          validate={[required]}
        />

        <Field
          name="email"
          id="email"
          component={renderField}
          type="email"
          label="Email"
          validate={[required]}
        />

        <Field
          name="username"
          id="username"
          component={renderField}
          type="username"
          label="Username"
          validate={[required, minMaxLength]}
        />

        <Field
          name="password"
          id="password"
          component={renderField}
          type="password"
          label="Create a password"
          validate={[required, minMaxLengthPassword]}
        />

        <Field
          name="passwordConfirmation"
          id="passwordConfirmation"
          component={renderField}
          type="password"
          label="Confirm your password"
          validate={[required]}
        />

        <div>
          <label htmlFor="">Do you need help in finding accommodation?</label>
          <div>
            <label htmlFor="yes_accommodation">
              <Field
                name="accommodation"
                id="yes_accommodation"
                component="input"
                type="radio"
                value="yes"
              />
              {' '}Yes
            </label>

            <label htmlFor="no_accommodation">
              <Field
                name="accommodation"
                id="no_accommodation"
                component="input"
                type="radio"
                value="no"
              />
              {' '}No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="interest">Favourite front-end framework</label>
          <div>
            <Field name="interest" id="interest" component="select">
              <option defaultValue disabled />
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="Ember">Ember</option>
              <option value="Ember">Meteor</option>
              <option value="Ember">Other</option>
            </Field>
          </div>
        </div>

        <div>
          <label htmlFor="reason">
            What topics would you like to hear about during the conference?
          </label>
          <div>
            <Field name="reason" component="textarea" />
          </div>
        </div>

        <div>
          <label htmlFor="newsletter">Subscribe to out newsletter</label>
          <Field name="newsletter" component="input" type="checkbox" />
        </div>

        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear values
          </button>
        </div>

      </form>
    );
  }
}

RegistrationForm = reduxForm({
  form: 'contact',
  validate,
  asyncValidate, // validates if email has already been used
  asyncBlurFields: ['username'],
})(RegistrationForm);

export default RegistrationForm;
