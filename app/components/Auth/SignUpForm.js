import React from 'react';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButtonSm from 'components/Button/FlatButtonSm';
import { userSignupRequest } from 'actions/AuthActions';
import SignUpFormUI from 'components/Auth/SignUpFormUI';
import validateInput from 'components/Auth/utils/signupValidation';

class SignUpForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      role: 'customer',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ role: e.target.name });
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors })
    } else {
      this.setState({ errors: {}, isLoading: true });
      userSignupRequest(this.state).then(
        () => {
          browserHistory.push('/');
        },
        (err) =>
          this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  render() {
    const { email, password, passwordConfirmation, errors } = this.state;

    return (
      <SignUpFormUI >
          <TextField
            floatingLabelText="Email"
            errorText={errors.email}
            onChange={this.onChange}
            value={email}
            name="email"
            type="text"
            fullWidth={true}
          />
          <TextField
            floatingLabelText="Password"
            errorText={errors.password}
            onChange={this.onChange}
            value={password}
            name="password"
            type="password"
            fullWidth={true}
          />
          <TextField
            floatingLabelText="Password Confirmation"
            errorText={errors.passwordConfirmation}
            onChange={this.onChange}
            value={passwordConfirmation}
            name="passwordConfirmation"
            type="password"
            fullWidth={true}
          />

          <FlatButtonSm label="Already have an account?" onClick={this.props.toggleAuthType} primary={true} style={{alignSelf: "flex-start", marginTop: 15}}/>

          <RaisedButton
            label="Sign up as Customer"
            disabled={this.state.isLoading}
            type="submit"
            name="customer"
            primary={true}
            onClick={this.onSubmit}
            style={{alignSelf: 'flex-end', marginTop: 15}}
          />
          <RaisedButton
            label="Sign up as Business Owner"
            disabled={this.state.isLoading}
            type="submit"
            name="business"
            secondary={true}
            onClick={this.onSubmit}
            style={{alignSelf: 'flex-end', marginTop: 15}}
          />
      </SignUpFormUI>
    );
  }
}

export default SignUpForm;
