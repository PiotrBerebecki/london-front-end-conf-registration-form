import React, { Component } from 'react';

import ContactForm from './ContactForm';

class ContactPage extends Component {
  submit = values => {
    // console.log(values);
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default ContactPage;
