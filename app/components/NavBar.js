import React from 'react';
import styled from 'styled-components';

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
    <a className="navbar-brand" href="www.google.com">Test</a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="www.google.com">Login</a>
        <a className="nav-item nav-link" href="www.google.com">Sign up</a>
      </div>
    </div>
  </StyledNav>
    );

export default NavBar;
