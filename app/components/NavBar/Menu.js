import React from 'react';
import CustomerMenu from 'components/NavBar/CustomerMenu';
import BusinessMenu from 'components/NavBar/BusinessMenu';
import { logout } from 'actions/AuthActions';

class Menu extends React.PureComponent{
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
    const { user } = this.props.auth;
    if( user.role === "business" ) return <BusinessMenu {...this.props} logout={this.logout}/>;
    return <CustomerMenu {...this.props} logout={this.logout}/>;
  }
}

export default Menu;
