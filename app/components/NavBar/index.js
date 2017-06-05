import React from 'react';
import { Link, browserHistory } from 'react-router';
import UserNav from 'components/NavBar/UserNav';
import GuestNav from 'components/NavBar/GuestNav';
import AppBar from 'material-ui/AppBar';

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
      <div>
        <AppBar
          title={<Link to="/">Menu Plus</Link>}
          showMenuIconButton={false}
          iconElementRight={
            isAuthenticated ?
            <UserNav {...this.props}/> : <GuestNav {...this.props}/>
          }
          iconStyleRight={{margin: 0}}
          style={styles.navbar}
        />
      </div>
    );
  };
}

NavBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
};

export default NavBar;
