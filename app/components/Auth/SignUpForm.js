import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButtonSm from 'components/Button/FlatButtonSm';
import { signup, login } from 'actions/AuthActions';
import SignUpFormUI from 'components/Auth/SignUpFormUI';
import validateInput from 'components/Auth/utils/signupValidation';
import PropTypes from 'prop-types';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  toggleAuthType: PropTypes.func.isRequired,
};

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
      [e.target.name]: e.target.value,
    });
  }

  onSubmit() {
    const { dispatch } = this.props;
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    } else {
      this.setState({ errors: {}, isLoading: true });
      dispatch(signup(this.state))
      .catch(
        json => this.setState({ errors: json.errors, isLoading: false})
      )
    }
  }

  AsCustomer(e) {
    e.preventDefault();
    this.setState({ role: 'customer' }, () => this.onSubmit());
  }

  AsBusiness(e) {
    e.preventDefault();
    this.setState({ role: 'business' }, () => this.onSubmit());
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
          fullWidth
        />
        <TextField
          floatingLabelText="Password"
          errorText={errors.password}
          onChange={this.onChange}
          value={password}
          name="password"
          type="password"
          fullWidth
        />
        <TextField
          floatingLabelText="Password Confirmation"
          errorText={errors.passwordConfirmation}
          onChange={this.onChange}
          value={passwordConfirmation}
          name="passwordConfirmation"
          type="password"
          fullWidth
        />

        <FlatButtonSm label="Already have an account?" onClick={this.props.toggleAuthType} primary style={{ alignSelf: 'flex-start', marginTop: 15 }} />

        <RaisedButton
          label="Sign up as Customer"
          disabled={this.state.isLoading}
          primary
          onClick={this.AsCustomer}
          style={{ alignSelf: 'flex-end', marginTop: 15 }}
        />
        <RaisedButton
          label="Sign up as Business Owner"
          disabled={this.state.isLoading}
          secondary
          disabled={true}
          onClick={this.AsBusiness}
          style={{ alignSelf: 'flex-end', marginTop: 15 }}
        />
      </SignUpFormUI>
    );
  }
}

SignUpForm.propTypes = propTypes;
export default SignUpForm;
