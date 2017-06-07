import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

class BusinessMenu extends React.PureComponent{
  render(){
    const {auth, logout} = this.props
    return(
      <Menu>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to={`/restaurant/${auth.user.id}`}><MenuItem>My restaurant</MenuItem></Link>
        <a onClick={logout}><MenuItem>Log out</MenuItem></a>
      </Menu>
    )
  }
};

export default BusinessMenu;
