import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignupRequest } from './actions/signupActions'

const AuthContainer = styled.div`
    box-sizing: border-box;
    padding-top: 60px;
`;

class AuthPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="row justify-content-md-center">
        <AuthContainer className="col-md-4">
          <LoginForm />
          <SignUpForm userSignupRequest={ userSignupRequest } />
        </AuthContainer>
      </div>
    );
  }
}

AuthPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(AuthPage);
