import React from 'react';
import axios from 'axios';

export default class SignUpForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('/api/users', { user: this.state });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange = {this.onChange}
            name="email"
            className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange = {this.onChange}
            name="password"
            className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">passwordConfirmation</label>
          <input
            type="password"
            value={this.state.passwordConfirmation}
            onChange = {this.onChange}
            name="passwordConfirmation"
            className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
                Sign up
          </button>
        </div>
      </form>
    );
  }
}
