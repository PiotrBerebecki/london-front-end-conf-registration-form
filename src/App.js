import React, { Component } from 'react';

import Header from './Header';
import ContactPage from './ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContactPage />
      </div>
    );
  }
}

export default App;
