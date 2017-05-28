import React from 'react';

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
        <h3>You have not claim business yet</h3>
        <button className="btn btn-primary" onClick={this.openModal}>Claim a New Restaurant Page</button>
      </div>
    );
  }
}

export default BusinessNotFound;
