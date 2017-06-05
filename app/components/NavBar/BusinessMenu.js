import React from 'react';

class BusinessMenu extends React.PureComponent{
  render(){
    const {user, logout} = this.props
    return(
      <Menu>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to={`/restaurant/${user.id}`}><MenuItem>My restaurant</MenuItem></Link>
        <a href="/logout" onClick={logout}><MenuItem>Log out</MenuItem></a>
      </Menu>
    )
  }
};

export default BusinessMenu;
