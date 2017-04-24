import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import RegistrationForm from './RegistrationForm';
import './RegistrationPage.css';

class RegistrationPage extends Component {
  state = {
    name: '',
  };

  handleSuccess = name => {
    this.setState({
      name,
    });
  };

  render() {
    return (
      <div>
        {this.state.name
          ? <Paper className="registration__container" zDepth={1}>
              <p className="registration__msg">
                {this.state.name}, thank you for registering 👏 <br />
                See you at the conference 😀
              </p>
            </Paper>
          : <RegistrationForm onSuccess={this.handleSuccess} />}
      </div>
    );
  }
}

export default RegistrationPage;
