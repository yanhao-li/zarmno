import React from 'react';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButtonSm from 'components/Button/FlatButtonSm';
import { login } from 'actions/AuthActions';
import LoginFormUI from 'components/Auth/LoginFormUI';
import validateInput from 'components/Auth/utils/loginValidation';

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const {dispatch} = this.props;
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      dispatch(login(this.state)).then(
        () => { browserHistory.push('/'); },
        (err) => { this.setState({ errors: err.response.data.errors, isLoading: false }); }
      );
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors, email, password, isLoading } = this.state;

    return (
      <LoginFormUI>
          <TextField
            name="email"
            floatingLabelText="Email"
            value={email}
            error={errors.email}
            onChange={this.onChange}
            type="text"
            fullWidth={true}
          />
          <TextField
            name="password"
            floatingLabelText="Password"
            value={password}
            error={errors.password}
            onChange={this.onChange}
            type="password"
            fullWidth={true}
          />
          <FlatButtonSm label="Forget Password?" primary={true} style={{alignSelf: "flex-start", marginTop: 50}}/>
          <FlatButtonSm label="Dont't have account?" onClick={this.props.toggleType} primary={true} style={{alignSelf: "flex-start", marginTop: 15}}/>
          <RaisedButton label="LOG IN" primary={true} onClick={this.onSubmit} disabled={this.state.isLoading} style={{alignSelf: 'flex-end'}}/>
      </LoginFormUI>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired,
};

export default LoginForm;
