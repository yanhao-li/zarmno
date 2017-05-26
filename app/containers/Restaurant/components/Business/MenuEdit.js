import React from 'react';
import DishEdit from './DishEdit';
import ModalStyle from '../components/ModalStyle';
import Modal from 'react-modal';
import DishUpdateForm from './DishUpdateForm';
import DishAddForm from './DishAddForm';

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
    const { menu } = this.props.restaurant;
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          {menu.map(dish =>
            (<DishEdit  key={dish.id} dish={dish} openModal={this.openModal} setDishEditing={this.setDishEditing} {...this.props}/>)
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
           (<DishUpdateForm closeModal={this.closeModal} dishEditing={this.state.dishEditing} {...this.props}/>)
           :
           (<DishAddForm closeModal={this.closeModal} {...this.props}/>)
          }
        </Modal>
      </div>
    );
  }
}

export default EditMenu;
