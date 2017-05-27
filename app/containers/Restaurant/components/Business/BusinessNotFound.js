import React from 'react';
import { getRestaurantsList } from 'actions/RestaurantActions';
import CreateResForm from './RestaurantCreateForm';
import { Link } from 'react-router';

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
    const restaurants = this.props.restaurantList;
    return (
      <div>
        <h3>You haven't claim business yet</h3>
        <button className="btn btn-primary" onClick={this.openModal}>Claim a New Restaurant Page</button>
      </div>
    );
  }
}

export default BusinessNotFound;
