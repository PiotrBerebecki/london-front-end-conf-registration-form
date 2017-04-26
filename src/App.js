import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import MainContent from './MainContent';
import HomeView from './HomeView';
import RegistrationView from './RegistrationView';
import './app.css';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  deepPurple500,
  deepPurple700,
  grey100,
  grey300,
  grey400,
  grey500,
  grey800,
  white,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple700,
    pickerHeaderColor: deepPurple500,
    primary2Color: deepPurple700,
    primary3Color: grey400,
    accent1Color: deepPurple500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: grey800,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
  },
  ripple: {
    color: deepPurple500,
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="app">
            <Header />
            <MainContent>
              <Route exact path="/" component={HomeView} />
            </MainContent>
            <MainContent>
              <Route path="/register" component={RegistrationView} />
            </MainContent>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
