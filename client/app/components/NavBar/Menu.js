import React from 'react';
import CustomerMenu from 'components/NavBar/CustomerMenu';
import BusinessMenu from 'components/NavBar/BusinessMenu';
import { logout } from 'actions/AuthActions';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

class Menu extends React.PureComponent {
  constructor() {
    super();
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickLogout(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(logout());
    browserHistory.push('/');
  }

  render() {
    const { user } = this.props.auth;
    if (user.role === 'business') return <BusinessMenu {...this.props} logout={this.onClickLogout} />;
    return <CustomerMenu {...this.props} logout={this.onClickLogout} />;
  }
}

Menu.propTypes = propTypes;

export default Menu;
