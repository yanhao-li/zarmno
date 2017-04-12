import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from 'containers/Authentication/actions/authActions';

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
  box-shadow: none;
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
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/restaurant">{ this.props.auth.user.email }</Link></li>
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

    return (
      <StyledNav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Test</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          { isAuthenticated ? userLinks : guestLinks }
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
