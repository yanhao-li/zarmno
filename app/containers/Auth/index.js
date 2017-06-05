import React from 'react';
import LoginForm from 'components/Auth/LoginForm';
import SignUpForm from 'components/Auth/SignUpForm';
import Dialog from 'material-ui/Dialog';

class Auth extends React.PureComponent{
  constructor(props) {
    super(props);
  }


  render(){
    const { authType } = this.props;
    if (authType === "Login") {
      return <LoginForm />
    } else {
      return <SignUpForm />
    }
  }
}

export default Auth;
