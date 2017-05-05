import React from 'react';
import MenuItem from './MenuItem';
import ModalStyle from './ModalStyle';
import Modal from 'react-modal';
import UpdateDishForm from './UpdateDishForm';
import AddDishForm from './AddDishForm';
import { connect } from 'react-redux';

class EditMenu extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      dishEditing: undefined,
      modalIsOpen: false,
      modalForm: 'add'
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setDishEditing = this.setDishEditing.bind(this);
    this.onAddDishBtnClick = this.onAddDishBtnClick.bind(this);
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

  onAddDishBtnClick(){
    this.openModal();
    this.setState({
      modalForm: 'add'
    });
  }

  setDishEditing(dish){
    this.setState({
      dishEditing: dish,
      modalForm: 'edit'
    });
  }


  render(){
    const { menu } = this.props;
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          {menu.map(dish =>
            (<MenuItem  key={dish.id} dish={dish} openModal={this.openModal} setDishEditing={this.setDishEditing}/>)
          )}
          <button type="button" className="btn btn-primary btn-sm" onClick={this.onAddDishBtnClick}>Add Dish</button>
        </ul>
        <Modal
          isOpen = {this.state.modalIsOpen}
          onRequestClose = {this.closeModal}
          contentLabel = "Update the Dish"
          className="modal-dialog"
          style={ModalStyle}
          shouldCloseOnOverlayClick={false}
        >
          { this.state.modalForm === 'edit' ?
           (<UpdateDishForm closeModal={this.closeModal} dishEditing={this.state.dishEditing} />)
           :
           (<AddDishForm closeModal={this.closeModal} />)
          }
        </Modal>
      </div>
    );
  }
}

export default EditMenu;
