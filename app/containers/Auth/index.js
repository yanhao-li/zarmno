import React from 'react';
import LoginForm from 'components/Auth/LoginForm';
import SignUpForm from 'components/Auth/SignUpForm';
import Dialog from 'material-ui/Dialog';
import {connect} from 'react-redux';

class Auth extends React.PureComponent{
  constructor(props) {
    super(props);
  }

  render(){
    const { authType, toggleAuthType, dispatch } = this.props;
    if (authType === "Login") {
      return <LoginForm toggleAuthType={toggleAuthType} dispatch={dispatch} />
    } else {
      return <SignUpForm toggleAuthType={toggleAuthType} dispatch={dispatch}/>
    }
  }
}

export default connect()(Auth);
