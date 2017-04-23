import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  // deepPurple100,
  deepPurple500,
  deepPurple700,
  grey100,
  grey300,
  grey400,
  grey500,
  // grey600,
  grey800,
  white,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
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
  // ripple: {
  //   color: 'red',
  // },
  // raisedButton: {
  //   color: deepPurple500,
  //   textColor: white,
  // },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header />
          <MainContent />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
