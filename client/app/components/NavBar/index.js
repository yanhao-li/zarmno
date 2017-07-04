import React from 'react';
import { Link } from 'react-router';
import UserNav from 'components/NavBar/UserNav';
import GuestNav from 'components/NavBar/GuestNav';
import AppBar from 'material-ui/AppBar';
import logo from './logo.svg';

const styles = {
  navbar: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '80px',
    paddingRight: '80px',
  },
};

class NavBar extends React.PureComponent {

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <AppBar
        title={<Link to="/" style={{ fontSize: 18, color: '#a7a7a7' }}>Zarmno</Link>}
        showMenuIconButton
        iconElementLeft={
          <img src={logo} width={40} alt="logo" />
        }
        iconElementRight={
          isAuthenticated ?
            <UserNav {...this.props} /> : <GuestNav {...this.props} />
        }
        iconStyleLeft={{ marginTop: 0 }}
        iconStyleRight={{ margin: 0 }}
        style={styles.navbar}
      />
    );
  }
}

NavBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
};

export default NavBar;
