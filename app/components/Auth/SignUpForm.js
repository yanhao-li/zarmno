import React from 'react';
import { browserHistory } from 'react-router';
import { userSignupRequest } from 'actions/AuthActions';
import TextFieldGroup from 'components/TextFieldGroup';
import styled from 'styled-components';
import validateInput from '../../../server/shared/validations/signup';

const AuthContainer = styled.div`
    box-sizing: border-box;
    padding-top: 50px;
`;

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
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    this.setState({ role: e.target.name });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      userSignupRequest(this.state).then(
        () => {
          browserHistory.push('/');
        }, (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
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
    const { errors } = this.state;

    return (
      <AuthContainer className="row justify-content-md-center">
        <form className="col-md-8" onSubmit={this.onSubmit}>
          <TextFieldGroup
            label="Email"
            error={errors.email}
            onChange={this.onChange}
            value={this.state.email}
            name="email"
            type="text"
          />
          <TextFieldGroup
            label="Password"
            error={errors.password}
            onChange={this.onChange}
            value={this.state.password}
            name="password"
            type="password"
          />
          <TextFieldGroup
            label="Password Confirmation"
            error={errors.passwordConfirmation}
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            name="passwordConfirmation"
            type="password"
          />
          <div className="form-group">
            <button
              disabled={this.state.isLoading}
              type="submit"
              className="btn btn-primary"
              name="customer"
              onClick={this.onClick}
            >
              Sign up as Customer
            </button>
          </div>
          <div className="form-group">
            <button
              disabled={this.state.isLoading}
              type="submit"
              className="btn btn-secondary"
              name="business"
              onClick={this.onClick}
            >
              Sign up as Business Owner
            </button>
          </div>
        </form>
      </AuthContainer>
    );
  }
}

export default SignUpForm;
