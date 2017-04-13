import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from 'containers/Authentication/actions/authActions';

const StyledNav = styled.nav`
  position: relative;
  height: 60px;
  width: 100%;
  z-index: 100;
`;

class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    let link;
    const userLinks = (
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/profile">{ this.props.auth.user.email }</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/restaurant">My Favorites</Link></li>
        <li className="nav-item"><a className="nav-link" href="/logout" onClick={this.logout}>Log out</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/login">Log in</Link></li>
      </ul>
    );

    const businessLinks = (
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/profile">{ this.props.auth.user.email }</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/restaurant">My restaurant</Link></li>
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
      <StyledNav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Test</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {link}
        </div>
      </StyledNav>
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
