import React from 'react';

class CustomerMenu extends React.PureComponent{
  constructor(){
    super();
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(logout);
    browserHistory.push('/');
  }


  render(){
    return(
      <Menu>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="/favorites"><MenuItem>My Favorites</MenuItem></Link>
        <a href="/logout" onClick={this.logout}><MenuItem>Log out</MenuItem></a>
      </Menu>
    )
  }
};

export default CustomerMenu;
