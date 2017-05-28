import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import FlatButton from 'material-ui/FlatButton';
import { deleteDish } from 'actions/RestaurantActions';

const DeleteSVG = (props) => (
  <SvgIcon color="#f44336" hoverColor="#e57373" {...props}>
    <path d="M10,0 C4.47,0 0,4.47 0,10 C0,15.53 4.47,20 10,20 C15.53,20 20,15.53 20,10 C20,4.47 15.53,0 10,0 Z"></path>
    <polygon id="Path" fill="#FFFFFF" points="15 13.59 13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10"></polygon>
  </SvgIcon>
);

class DishDeleteButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.deleteDish = this.deleteDish.bind(this);
  }

  openModal(e) {
    e.stopPropagation();
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  deleteDish(e) {
    const { dispatch, dish } = this.props;
    e.preventDefault();
    dispatch(deleteDish(dish));
    this.closeModal();
  }

  render() {
    const { dish } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeModal}
      />,
      <FlatButton
        label="Confirm"
        secondary
        onTouchTap={this.deleteDish}
      />,
    ];

    return (
      <div>
        <IconButton style={{ position: 'absolute', top: -22, right: -25 }} onTouchTap={this.openModal}>
          <DeleteSVG />
        </IconButton>
        <Dialog
          title={`Delete Dish: ${dish.name}`}
          actions={actions}
          modal
          open={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          Are you sure you wanna delete the dish "{dish.name}"
        </Dialog>
      </div>
    );
  }
}

export default DishDeleteButton;
