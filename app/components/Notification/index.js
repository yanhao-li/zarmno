import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { closeNoti } from 'actions/NotiActions';

class Notification extends React.PureComponent{

  handleActionTouchTap = () => {
    const {dispatch} = this.props;
    dispatch(closeNoti);
  };

  handleRequestClose = () => {
    const {dispatch} = this.props;
    dispatch(closeNoti);
  };

  render() {
    const { notification } = this.props;
    return(
      <Snackbar
        open={notification.isOpen}
        message={notification.message}
        action={notification.action}
        autoHideDuration={4000}
        onActionTouchTap={this.handleActionTouchTap}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
};

export default Notification;
