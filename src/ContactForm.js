import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
  render() {
    const { handleSubmit, pristine, reset } = this.props;
    return (
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            id="lastName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            id="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            id="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="">Accommodation required?</label>
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
            </Field>
          </div>
        </div>

        <div>
          <label htmlFor="newsletter">Subscribe to newsletter</label>
          <Field name="newsletter" component="input" type="checkbox" />
        </div>

        <div>
          <label htmlFor="notes">Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>

        <div>
          <button type="submit" disabled={pristine}>Submit</button>
          <button type="button" disabled={pristine} onClick={reset}>
            Clear values
          </button>
        </div>

      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact',
})(ContactForm);

export default ContactForm;
