import React, { Component } from 'react';

import RegistrationForm from './RegistrationForm';

class RegistrationPage extends Component {
  submit = values => {
    // console.log(values);
  };

  render() {
    return (
      <div>
        <RegistrationForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default RegistrationPage;
