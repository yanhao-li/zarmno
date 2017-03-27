import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthContainer = styled.div`
    box-sizing: border-box;
    padding-top: 60px;
`;

export default class AuthPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row justify-content-md-center">
        <AuthContainer className="col-md-4">
          <LoginForm />
          <SignUpForm />
        </AuthContainer>
      </div>
    );
  }
}
