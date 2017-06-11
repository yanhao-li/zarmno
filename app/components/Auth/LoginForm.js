import React from 'react';
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
    const { dispatch } = this.props;
    const { errors, isValid } = validateInput(this.state);
    e.preventDefault();
    if (!isValid) {
      this.setState({ errors });
    } else {
      this.setState({ errors: {}, isLoading: true });
      dispatch(login(this.state)).catch(
        (err) => { this.setState({ errors: err.response.data.errors, isLoading: false }); }
      );
    }
  }

  render() {
    const { errors, email, password, isLoading } = this.state;

    return (
      <LoginFormUI>
        <TextField
          name="email"
          floatingLabelText="Email"
          value={email}
          errorText={errors.email}
          onChange={this.onChange}
          type="text"
          fullWidth
        />
        <TextField
          name="password"
          floatingLabelText="Password"
          value={password}
          errorText={errors.password}
          onChange={this.onChange}
          type="password"
          fullWidth
        />
        <FlatButtonSm label="Forget Password?" primary style={{ alignSelf: 'flex-start', marginTop: 50 }} />
        <FlatButtonSm name="toggleBtn" label="Dont't have an account?" onClick={this.props.toggleAuthType} primary style={{ alignSelf: 'flex-start', marginTop: 15 }} />
        <RaisedButton label="LOG IN" primary onClick={this.onSubmit} disabled={isLoading} style={{ alignSelf: 'flex-end' }} />
      </LoginFormUI>
    );
  }
}

LoginForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  toggleAuthType: React.PropTypes.func.isRequired,
};

export default LoginForm;
