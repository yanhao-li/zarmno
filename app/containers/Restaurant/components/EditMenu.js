import React from 'react';
import { Link } from 'react-router';
import MenuItem from './MenuItem';
import ModalStyle from './ModalStyle';
import UpdateDishModal from 'react-modal';
import UpdateDishForm from './UpdateDishForm';

class EditMenu extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      dishEditing: undefined,
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  openModal(dish){
    this.setState({
      dishEditing: dish,
      modalIsOpen: true
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    });
  }

  render(){
    const { menu } = this.props.restaurant;
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          {menu.map(dish =>
            (<MenuItem  key={dish.id} dish={dish} openModal={this.openModal.bind(this, dish)}/>)
          )}
        </ul>
        <UpdateDishModal
          isOpen = {this.state.modalIsOpen}
          onRequestClose = {this.closeModal}
          contentLabel = "Update the Dish"
          className="modal-dialog"
          style={ModalStyle}
          shouldCloseOnOverlayClick={false}
        >
          <UpdateDishForm closeModal={this.closeModal} dishEditing={this.state.dishEditing} />
        </UpdateDishModal>
      </div>
    );
  }
}

export default EditMenu;
