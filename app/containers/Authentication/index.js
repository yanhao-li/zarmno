import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { userSignupRequest } from './actions/signupActions';

const AuthContainer = styled.div`
    box-sizing: border-box;
    padding-top: 60px;
`;

class AuthPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      currentForm: 'signup',
    };
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(e){
    e.preventDefault();
    this.setState({ currentForm: e.target.name});
  }

  render() {
    let form = null;
    if(this.state.currentForm == 'signup'){
      form = <SignUpForm userSignupRequest={this.props.userSignupRequest}/>;
    } else {
      form = <LoginForm />;
    }
    return (
      <div className="row justify-content-md-center">
        <AuthContainer className="col-md-4">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#signup" name="signup" onClick={this.tabClick}>Sign up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#login" name="login" onClick={this.tabClick}>Log In</a>
            </li>
          </ul>
          { form }
        </AuthContainer>
      </div>
    );
  }
}

AuthPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

export default connect(null, { userSignupRequest })(AuthPage);
