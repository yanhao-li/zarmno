import React from 'react';
import classnames from 'classnames';

export default class SignUpForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state).then(
      () => {}, (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className={classnames("form-group", { 'has-danger': errors.email })}>
          <label className="form-control-label">Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange = {this.onChange}
            name="email"
            className="form-control"
          />
          { errors.email && <span className="form-control-feedback">{ errors.email }</span> }
        </div>

        <div className={classnames("form-group", { 'has-danger': errors.password })}>
          <label className="form-control-label">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange = {this.onChange}
            name="password"
            className="form-control" />
          { errors.password && <span className="form-control-feedback">{ errors.password }</span> }
        </div>

        <div className={classnames("form-group", { 'has-danger': errors.passwordConfirmation })}>
          <label className="form-control-label">passwordConfirmation</label>
          <input
            type="password"
            value={this.state.passwordConfirmation}
            onChange = {this.onChange}
            name="passwordConfirmation"
            className="form-control" />
          { errors.passwordConfirmation && <span className="form-control-feedback">{ errors.passwordConfirmation }</span> }
        </div>
        <div className="form-group">
          <button disabled={this.state.isLoading}  className="btn btn-primary">
                Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}
