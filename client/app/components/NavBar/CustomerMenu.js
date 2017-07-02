import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  logout: PropTypes.func.isRequired,
};

class CustomerMenu extends React.PureComponent {
  render() {
    const { logout } = this.props;
    return (
      <Menu>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="/restaurants"><MenuItem>All Restaurants</MenuItem></Link>
        <Link to="/favorites"><MenuItem>My Favorites</MenuItem></Link>
        <Link onClick={logout}><MenuItem>Log out</MenuItem></Link>
      </Menu>
    );
  }
}

CustomerMenu.propTypes = propTypes;

export default CustomerMenu;
