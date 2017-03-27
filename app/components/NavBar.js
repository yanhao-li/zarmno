import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
`;

const NavBar = () => (
  <StyledNav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">Test</Link>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/auth">Sign up</Link>
        <Link className="nav-item nav-link" to="/auth">Log in</Link>
      </div>
    </div>
  </StyledNav>
    );

export default NavBar;
