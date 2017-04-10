import React from 'react';
import { browserHistory } from 'react-router';
import TextFieldGroup from 'components/common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/signup';

class SignUpForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
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
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
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
      <form onSubmit={this.onSubmit}>
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
          <button disabled={this.state.isLoading} className="btn btn-primary">
                Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

export default SignUpForm;
