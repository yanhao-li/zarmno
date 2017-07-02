import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Menu from 'components/NavBar/Menu';

class UserNav extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false,
      avatarShadow: 1,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  onMouseEnter = () => {
    this.setState({
      avatarShadow: 2,
    });
  }

  onMouseLeave = () => {
    this.setState({
      avatarShadow: 1,
    });
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

  render() {
    return (
      <Paper
        circle
        onTouchTap={this.handleTouchTap}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        zDepth={this.state.avatarShadow}
      >
        <Avatar src="https://pbs.twimg.com/profile_images/703321571667132417/009UGEqY_normal.jpg" />
        <Popover
          open={this.state.menuIsOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu {...this.props} />
        </Popover>
      </Paper>
    );
  }
}

export default UserNav;
