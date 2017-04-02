import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from 'containers/Authentication/actions/logoutAction.js';

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
`;

class NavBar extends React.PureComponent{
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#" onClick={this.logout.bind(this)}>Log out</a>
      </div>
    );

    const guestLinks = (
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/auth">Sign up</Link>
        <Link className="nav-item nav-link" to="/auth">Log in</Link>
      </div>
    );

    return(
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
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.get('auth')
  }
}

export default connect(mapStateToProps, { logout })(NavBar);
