import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationForm from './RegistrationForm';

class RegistrationPage extends Component {
  handleResult = values => {
    console.log('RegistrationPage', values);
  };

  render() {
    return (
      <div>
        <RegistrationForm onValidationFinished={this.handleResult} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, null)(RegistrationPage);
