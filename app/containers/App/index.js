/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from 'containers/Authentication/actions/authActions';
import { connect } from 'react-redux';


const AppDiv = styled.div`
  height: 100%;
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    loadUserFromToken: React.PropTypes.func,
  };

  componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <AppDiv>
        <NavBar />
        {React.Children.toArray(this.props.children)}
      </AppDiv>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadUserFromToken: () => {
      // const token = localStorage.getItem('jwtToken');
      // if (!token || token === '') {
      //   return;
      // }
      // setAuthorizationToken(token);
      // dispatch(setCurrentUser(jwtDecode(token)));
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
