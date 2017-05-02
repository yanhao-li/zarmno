import React from 'react';
import { Link } from 'react-router';
import MenuItem from './MenuItem';
import ModalStyle from './ModalStyle';
import Modal from 'react-modal';
import UpdateDishForm from './UpdateDishForm';
import AddDishForm from './AddDishForm';
import { addDish } from '../actions';
import { connect } from 'react-redux';

class EditMenu extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      dishEditing: undefined,
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setDishEditing = this.setDishEditing.bind(this);
  };

  openModal(){
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    });
  }

  setDishEditing(dish){
    this.setState({
      dishEditing: dish
    });
  }


  render(){
    const { menu } = this.props.restaurant;
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          {menu.map(dish =>
            (<MenuItem  key={dish.id} dish={dish} openModal={this.openModal} setDishEditing={this.setDishEditing}/>)
          )}
          <button type="button" className="btn btn-primary btn-sm" onClick={this.props.addDish}>Add Dish</button>
        </ul>
        <Modal
          isOpen = {this.state.modalIsOpen}
          onRequestClose = {this.closeModal}
          contentLabel = "Update the Dish"
          className="modal-dialog"
          style={ModalStyle}
          shouldCloseOnOverlayClick={false}
        >
          <UpdateDishForm closeModal={this.closeModal} dishEditing={this.state.dishEditing} />
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addDish })(EditMenu);
