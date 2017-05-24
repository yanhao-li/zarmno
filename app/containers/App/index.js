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
import { initAuth } from 'actions/AuthActions';
import { connect } from 'react-redux';
import { black, white } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const AppDiv = styled.div`
  height: 100%;
`;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1E88E5',
    accent1Color: '#EC407A',
    textColor: black,
    alternateTextColor: white
  },
})

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initAuth());
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppDiv>
          <NavBar />
          {React.Children.toArray(this.props.children)}
        </AppDiv>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};


export default connect()(App);
