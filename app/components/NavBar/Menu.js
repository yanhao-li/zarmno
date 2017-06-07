import React from 'react';
import CustomerMenu from 'components/NavBar/CustomerMenu';
import BusinessMenu from 'components/NavBar/BusinessMenu';
import { logout } from 'actions/AuthActions';
import { browserHistory } from 'react-router'

class Menu extends React.PureComponent{
  constructor(){
    super();
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickLogout(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(logout());
    browserHistory.push('/');
  }

  render(){
    const { user } = this.props.auth;
    if( user.role === "business" ) return <BusinessMenu {...this.props} logout={this.onClickLogout}/>;
    return <CustomerMenu {...this.props} logout={this.onClickLogout}/>;
  }
}

export default Menu;
