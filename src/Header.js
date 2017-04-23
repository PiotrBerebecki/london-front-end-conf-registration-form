import React from 'react';

// material-ui
import AppBar from 'material-ui/AppBar';

const Header = () => (
  <AppBar
    title={`London Front-End Conf ${new Date().getFullYear() + 1} - Registration Form`}
    titleStyle={{ textAlign: 'center' }}
    showMenuIconButton={false}
  />
);

export default Header;
