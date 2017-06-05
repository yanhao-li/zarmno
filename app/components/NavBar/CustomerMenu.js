import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

class CustomerMenu extends React.PureComponent{
  render(){
    const { logout } = this.props;
    return(
      <Menu>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="/favorites"><MenuItem>My Favorites</MenuItem></Link>
        <a href="/logout" onClick={logout}><MenuItem>Log out</MenuItem></a>
      </Menu>
    )
  }
};

export default CustomerMenu;
