import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import './RegistrationForm.css';

// material-ui
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
} from 'redux-form-material-ui';

import {
  required,
  minMaxLengthUsername,
  minMaxLengthEmail,
  validEmail,
  minMaxLengthPassword,
  validateOnBlurAsync as asyncValidate,
  arePasswordsMatching as validate,
  validateSubmit,
} from './lib/form-validation';

const renderFieldNoErrorWhenActive = ({
  input,
  label,
  meta: { touched, active, error },
  ...custom
}) => {
  return (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && !active && error}
      fullWidth={true}
      {...input}
      {...custom}
    />
  );
};

const styleButton = {
  width: '48%',
};

// <form onSubmit={handleSubmit(validateSubmit)}>

class RegistrationForm extends Component {
  handleValidation = values => {
    validateSubmit(values)
      .then(value => {
        console.log('success chain');
      })
      .catch(e => {
        console.log('catch', e);
      });
  };

  render() {
    const { handleSubmit, reset, pristine, submitting, error } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleValidation)}>

        {error && <div className="form__error">{error}</div>}

        <Field
          name="firstName"
          component={TextField}
          hintText="First Name"
          floatingLabelText="First Name"
          // validate={[required]}
          fullWidth={true}
        />

        <Field
          name="lastName"
          component={TextField}
          hintText="Last Name"
          floatingLabelText="Last Name"
          // validate={[required]}
          fullWidth={true}
        />

        <Field
          name="email"
          component={TextField}
          hintText="Email"
          floatingLabelText="Email"
          // validate={[required, validEmail, minMaxLengthEmail]}
          fullWidth={true}
        />

        <Field
          name="username"
          component={renderFieldNoErrorWhenActive}
          hintText="Username"
          floatingLabelText="Username"
          // validate={[required, minMaxLengthUsername]}
        />

        <Field
          name="password"
          component={renderFieldNoErrorWhenActive}
          hintText="Password"
          type="password"
          floatingLabelText="Password"
          // validate={[required, minMaxLengthPassword]}
          fullWidth={true}
        />

        <Field
          name="passwordConfirmation"
          component={renderFieldNoErrorWhenActive}
          hintText="Confirm your password"
          type="password"
          floatingLabelText="Confirm your password"
          // validate={[required]}
          fullWidth={true}
        />

        <Field
          name="first_timer"
          component={RadioButtonGroup}
          className="radiobuttons__container"
        >
          <RadioButton value="yes" label="Attending for the first time" />
          <RadioButton
            value="no"
            label="I've attended previous conference(s)"
          />
        </Field>

        <Field
          name="favourite_framework"
          component={SelectField}
          hintText="Favourite front-end framework"
          floatingLabelText="Favourite front-end framework"
          fullWidth={true}
        >
          <MenuItem value="react" primaryText="React" />
          <MenuItem value="angular" primaryText="Angular" />
          <MenuItem value="vue" primaryText="Vue" />
          <MenuItem value="ember" primaryText="Ember" />
          <MenuItem value="meteor" primaryText="Meteor" />
          <MenuItem value="other" primaryText="Other" />
        </Field>

        <Field
          name="newsletter"
          component={Checkbox}
          label="Subscribe to out newsletter"
          className="checkbox__container"
        />

        <div className="buttons__container">
          <RaisedButton
            type="submit"
            disabled={submitting}
            label="Submit"
            style={styleButton}
          />
          <RaisedButton
            type="button"
            disabled={pristine || submitting}
            label="Reset"
            style={styleButton}
            onTouchTap={reset}
          />
        </div>

      </form>
    );
  }
}

RegistrationForm = reduxForm({
  form: 'registration',
  validate, // sync validation
  asyncValidate, // async validation
  asyncBlurFields: ['email', 'username'], // pick the fields for async field validation
})(RegistrationForm);

export default RegistrationForm;
