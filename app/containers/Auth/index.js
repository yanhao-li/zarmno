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
    const { authType, toggleType, dispatch } = this.props;
    if (authType === "Login") {
      return <LoginForm toggleType={toggleType} dispatch={dispatch} />
    } else {
      return <SignUpForm toggleType={toggleType} dispatch={dispatch}/>
    }
  }
}

export default connect()(Auth);
