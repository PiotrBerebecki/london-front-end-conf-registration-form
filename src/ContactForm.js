import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  required,
  min6Max30Length,
  validateSubmit,
  asyncValidate,
} from './lib/form-validation';

const renderField = ({
  input,
  id,
  type,
  label,
  meta: { asyncValidating, touched, error },
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...input} name={id} id={id} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

class ContactForm extends Component {
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
          validate={[required, min6Max30Length]}
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
          <label htmlFor="newsletter">Subscribe to newsletter</label>
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

ContactForm = reduxForm({
  form: 'contact',
  asyncValidate,
  asyncBlurFields: ['username'],
})(ContactForm);

export default ContactForm;
