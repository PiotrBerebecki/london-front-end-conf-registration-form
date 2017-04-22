import React, { Component } from 'react';

import Header from './Header';
import RegistrationPage from './RegistrationPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RegistrationPage />
      </div>
    );
  }
}

export default App;
