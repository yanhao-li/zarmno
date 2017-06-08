import React from 'react';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButtonSm from 'components/Button/FlatButtonSm';
import { userSignupRequest } from 'actions/AuthActions';
import { login } from 'actions/AuthActions';
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
    this.AsCustomer = this.AsCustomer.bind(this);
    this.AsBusiness = this.AsBusiness.bind(this);

  }

  onChange(e) {
    this.setState({
      errors: {},
      [e.target.name]: e.target.value
    });
  }

  AsCustomer(e){
    e.preventDefault();
    this.setState({ role: 'customer' }, () => this.onSubmit());
  }

  AsBusiness(e){
    e.preventDefault();
    this.setState({ role: 'business' }, () => this.onSubmit());
  }

  onSubmit() {
    const { dispatch } = this.props;
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors })
    } else {
      this.setState({ errors: {}, isLoading: true });
      userSignupRequest(this.state).then(
        () => {
          dispatch(login(this.state)).catch(
            (err) => { this.setState({ errors: err.response.data.errors, isLoading: false }); }
          );
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
            primary={true}
            onClick={this.AsCustomer}
            style={{alignSelf: 'flex-end', marginTop: 15}}
          />
          <RaisedButton
            label="Sign up as Business Owner"
            disabled={this.state.isLoading}
            secondary={true}
            onClick={this.AsBusiness}
            style={{alignSelf: 'flex-end', marginTop: 15}}
          />
      </SignUpFormUI>
    );
  }
}

export default SignUpForm;
