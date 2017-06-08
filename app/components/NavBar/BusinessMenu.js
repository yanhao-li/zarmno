import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

class BusinessMenu extends React.PureComponent {
  render() {
    const { auth, logout } = this.props;
    return (
      <Menu>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="/restaurants"><MenuItem>All Restaurants</MenuItem></Link>
        <Link to={`/restaurant/${auth.user.id}`}><MenuItem>My restaurant</MenuItem></Link>
        <Link onClick={logout}><MenuItem>Log out</MenuItem></Link>
      </Menu>
    );
  }
}

BusinessMenu.propTypes = propTypes;

export default BusinessMenu;
