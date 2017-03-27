import React from 'react';

export default class LoginForm extends React.PureComponent {
  render() {
    return (
      <form>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input type="text" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
                Login
          </button>
        </div>
      </form>
    );
  }
}
