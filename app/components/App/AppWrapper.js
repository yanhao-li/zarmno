import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1E88E5',
    accent1Color: '#FFC107',

  },
});

function AppWrapper(props) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{ height: '100%' }}>
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}

AppWrapper.propTypes = propTypes;
export default AppWrapper;
