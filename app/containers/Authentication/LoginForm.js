import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import TextFieldGroup from 'components/common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import { login } from './actions/loginAction';

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
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        () => { browserHistory.push('/'); },
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
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
      <form onSubmit={this.onSubmit}>

        { errors.form && <div className="alert alert-danger">{errors.form}</div> }
        <TextFieldGroup
          className="form-group"
          name="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={this.onChange}
          type="text"
        />

        <TextFieldGroup
          className="form-group"
          name="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary">
                Log in
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired,
};

LoginForm.contextType = {
  router: React.PropTypes.object.isRequired,
};

export default connect(null, { login })(LoginForm);
