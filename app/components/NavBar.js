import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from 'actions/AuthActions';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    let link;
    const userLinks = (
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to="/profile">{ user.email }</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/favorites">My Favorites</Link></li>
        <li className="nav-item"><a className="nav-link" href="/logout" onClick={this.logout}>Log out</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/login">Log in</Link></li>
      </ul>
    );

    const businessLinks = (
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to="/profile">{ user.email }</Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/restaurant/" + user.id}>My restaurant</Link></li>
        <li className="nav-item"><a className="nav-link" href="/logout" onClick={this.logout}>Log out</a></li>
      </ul>
    );

    if (!isAuthenticated) {
      link = guestLinks;
    } else if (user.role === 'customer') {
      link = userLinks;
    } else if (user.role === 'business') {
      link = businessLinks;
    }


    return (
      <AppBar
        title={<Link to="/">Menu Plus</Link>} iconElementRight={link} />
    );
  }
}

NavBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.get('auth'),
  };
}

export default connect(mapStateToProps, { logout })(NavBar);
