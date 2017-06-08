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
import AppWrapper from 'components/App/AppWrapper';
import { initAuth } from 'actions/AuthActions';
import { connect } from 'react-redux';


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
      <AppWrapper>
        <NavBar {...this.props} />
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.get('auth'),
  };
}

export default connect(mapStateToProps)(App);
