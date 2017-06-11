import React from 'react';
import LoginForm from 'components/Auth/LoginForm';
import SignUpForm from 'components/Auth/SignUpForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  authType: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

class Auth extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      authType: props.authType,
    };
    this.toggleAuthType = this.toggleAuthType.bind(this);
  }

  toggleAuthType() {
    if (this.state.authType === 'Sign Up') {
      this.setState({
        authType: 'Login',
      });
    } else {
      this.setState({
        authType: 'Sign Up',
      });
    }
  }

  render() {
    const { dispatch } = this.props;
    const { authType } = this.state;
    if (authType === 'Login') {
      return <LoginForm toggleAuthType={this.toggleAuthType} dispatch={dispatch} />;
    }
    return <SignUpForm toggleAuthType={this.toggleAuthType} dispatch={dispatch} />;
  }
}

Auth.propTypes = propTypes;

export default connect()(Auth);
