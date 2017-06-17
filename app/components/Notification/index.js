import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { closeNot } from 'actions/NotActions';

class Notification extends React.PureComponent{

  handleActionTouchTap = () => {
    const {dispatch} = this.props;
    dispatch(closeNot);
  };

  handleRequestClose = () => {
    const {dispatch} = this.props;
    dispatch(closeNot);
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
