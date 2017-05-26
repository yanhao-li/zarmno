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
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const styles = {
  navbar: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '80px',
    paddingRight: '80px',
    iconElementRight: {
      margin: 0,
      FlatButton: {
        color: 'white'
      },
    }
  }
}

class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      avatarShadow: 1,
      menuIsOpen: false
    }
    this.logout = this.logout.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
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

  onMouseEnter = () => {
    this.setState({
      avatarShadow: 2
    })
  }

  onMouseLeave = () => {
    this.setState({
      avatarShadow: 1
    })
  }

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
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="/favorites"><MenuItem>My Favorites</MenuItem></Link>
        <a href="/logout" onClick={this.logout}><MenuItem>Log out</MenuItem></a>
      </Menu>
    )

    const businessMenu = (
      <Menu>
        <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
        <Link to={"/restaurant/" + user.id}><MenuItem>My restaurant</MenuItem></Link>
        <a href="/logout" onClick={this.logout}><MenuItem>Log out</MenuItem></a>
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
        <li className="nav-item"><Link className="nav-link" to="/signup"><FlatButton label="SIGN UP" backgroundColor='#1E88E5' hoverColor='#0D47A1' style={styles.navbar.iconElementRight.FlatButton} /></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/login"><FlatButton label="LOG IN" backgroundColor='#EC407A' hoverColor='#AD1457' style={styles.navbar.iconElementRight.FlatButton} /></Link></li>
      </ul>
    );

    const userNav = (
      <Paper circle={true} onTouchTap={this.handleTouchTap} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} zDepth={this.state.avatarShadow}>
        <Avatar src="https://pbs.twimg.com/profile_images/703321571667132417/009UGEqY_normal.jpg"/>
      </Paper>
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
          iconStyleRight={styles.navbar.iconElementRight}
          style={styles.navbar}
        />
        <Popover
          open={this.state.menuIsOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
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
