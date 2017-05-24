import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from 'actions/AuthActions';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';

const styles = {
  navbar: {
    backgroundColor: 'white',
    FlatButton: {
      color: 'white'
    }
  }
}

class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false
    }
    this.logout = this.logout.bind(this);
  }


  handleTouchTap = (e) => {
    e.preventDefault();
    this.setState({
      menuIsOpen: true,
      anchorEl: e.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      menuIsOpen: false,
    });
  };

  logout(e) {
    e.preventDefault();
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    let nav;
    let navMenu;

    const customerMenu = (
      <Menu>
        <MenuItem><Link to="/profile">Profile</Link></MenuItem>
        <MenuItem><Link to="/favorites">My Favorites</Link></MenuItem>
        <MenuItem><a href="/logout" onClick={this.logout}>Log out</a></MenuItem>
      </Menu>
    )

    const businessMenu = (
      <Menu>
        <MenuItem><Link to="/profile">Profile</Link></MenuItem>
        <MenuItem><Link to={"/restaurant/" + user.id}>My restaurant</Link></MenuItem>
        <MenuItem><a href="/logout" onClick={this.logout}>Log out</a></MenuItem>
      </Menu>
    );

    if (isAuthenticated) {
      if (user.role === 'business') {
        navMenu = businessMenu
      } else {
        navMenu = customerMenu
      }
    }

    const guestNav = (
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to="/signup"><FlatButton label="SIGN UP" backgroundColor='#1E88E5' hoverColor='#0D47A1' style={styles.navbar.FlatButton} /></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/login"><FlatButton label="LOG IN" backgroundColor='#EC407A' hoverColor='#AD1457' style={styles.navbar.FlatButton} /></Link></li>
      </ul>
    );

    const userNav = (
      <FlatButton label={user.email} onTouchTap={this.handleTouchTap} style={{color: '#64B5F6'}} />
    );

    if (!isAuthenticated) {
      nav = guestNav
    } else {
      nav = userNav
    }

    return (
      <div>
        <AppBar
          title={<Link to="/">Menu Plus</Link>}
          showMenuIconButton={false}
          iconElementRight={nav}
          style={styles.navbar}
        />
        <Popover
          open={this.state.menuIsOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          >
          {navMenu}
        </Popover>
      </div>
    );
  }
}

NavBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.get('auth'),
  };
}

export default connect(mapStateToProps, { logout })(NavBar);
