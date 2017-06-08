import React from 'react';
import LoginForm from 'components/Auth/LoginForm';
import SignUpForm from 'components/Auth/SignUpForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  authType: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  toggleAuthType: PropTypes.func.isRequired,
};

class Auth extends React.PureComponent {

  render() {
    const { authType, toggleAuthType, dispatch } = this.props;
    if (authType === 'Login') {
      return <LoginForm toggleAuthType={toggleAuthType} dispatch={dispatch} />;
    }
    return <SignUpForm toggleAuthType={toggleAuthType} dispatch={dispatch} />;
  }
}

Auth.propTypes = propTypes;

export default connect()(Auth);
