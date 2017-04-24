import React from 'react';
import CreateNewResModal from 'react-modal';
import { getRestaurantsList, setCurrentRes } from '../actions';
import ModalStyle from './ModalStyle';
import CreateResForm from './CreateResForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class BusinessList extends React.PureComponent{
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
        <h1>Dashboard</h1>
        { restaurants.length > 0 ?
          (
            <ul>
              {restaurants.map(restaurant =>
                (<li key={restaurant.id}> <Link to={'/restaurant/' + restaurant.id} onClick={() => this.props.onClickLink(restaurant)}>{restaurant.name}</Link></li>
                )
              )}
            </ul>
          ) :
          (
            <div>
              <div>
                  <span>You have no restaurants, claim one</span>
              </div>
            </div>
          )
        }
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

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLink: (restaurant) => {
      dispatch(setCurrentRes(restaurant));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
