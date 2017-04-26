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
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render(){
    const { menu } = this.props.restaurant;
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          {menu.map(dish =>
            (<MenuItem  key={dish.id} dish={dish} openModal={this.openModal}/>)
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
          <UpdateDishForm closeModal={this.closeModal} />
        </UpdateDishModal>
      </div>
    );
  }
}

export default EditMenu;
