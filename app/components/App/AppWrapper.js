import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1E88E5',
    accent1Color: '#EC407A',
    textColor: "#000000",
    alternateTextColor: "#ffffff",
  },
});

function AppWrapper(props) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{height: "100%"}}>
        {props.children}
      </div>
    </MuiThemeProvider>
  )
}

export default AppWrapper;
