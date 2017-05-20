import React from 'react';
import CreateNewResModal from 'react-modal';
import { getRestaurantsList } from 'actions/RestaurantActions';
import ModalStyle from './components/ModalStyle';
import CreateResForm from './components/RestaurantCreateForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class BusinessNotFound extends React.PureComponent{
  constructor(props){
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
    const restaurants = this.props.restaurantList;
    return(
      <div>
        <h3>You haven't claim business yet</h3>
        <button className="btn btn-primary" onClick={this.openModal}>Claim a New Restaurant Page</button>
        <CreateNewResModal
          isOpen = {this.state.modalIsOpen}
          onRequestClose = {this.closeModal}
          contentLabel = "Create New Restaurant Label"
          className="modal-dialog"
          style={ModalStyle}
          shouldCloseOnOverlayClick={false}
        >
          <CreateResForm closeModal = {this.closeModal}/>
        </CreateNewResModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.get('auth'),
    restaurantList: state.get('restaurantList')
  }
};

export default connect(mapStateToProps)(BusinessNotFound);
