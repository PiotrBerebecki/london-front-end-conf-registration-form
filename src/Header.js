import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// material-ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import NotificationEventAvailable
  from 'material-ui/svg-icons/notification/event-available';

import './Header.css';

class Header extends Component {
  state = {
    isDrawerOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  };

  handleClose = () => {
    this.setState({
      isDrawerOpen: false,
    });
  };

  render() {
    console.log(this.state.isDrawerOpen);
    return (
      <div>
        <AppBar
          title={`London Front-End Conf ${new Date().getFullYear() + 1}`}
          titleStyle={{ textAlign: 'center' }}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
        />

        <Drawer
          docked={false}
          width={250}
          open={this.state.isDrawerOpen}
          onRequestChange={isDrawerOpen => this.setState({ isDrawerOpen })}
        >

          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionHome />}>
              Home
            </MenuItem>
          </NavLink>

          <NavLink
            to="/about"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            <MenuItem
              onTouchTap={this.handleClose}
              leftIcon={<ActionInfoOutline />}
            >
              About
            </MenuItem>
          </NavLink>

          <NavLink
            to="/register"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            <MenuItem
              onTouchTap={this.handleClose}
              leftIcon={<NotificationEventAvailable />}
            >
              Register
            </MenuItem>
          </NavLink>

        </Drawer>

      </div>
    );
  }
}

export default Header;
