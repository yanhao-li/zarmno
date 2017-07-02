import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class BusinessNotFound extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <h3>You have not claim business yet, you can</h3>
        <RaisedButtonsm onTouchTap={this.openModal} primary={true}>Claim</RaisedButtonsm>
      </div>
    );
  }
}

export default BusinessNotFound;
