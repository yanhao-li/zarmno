import React from 'react';
import CreateNewResModal from 'react-modal';
import { getRestaurantsList } from '../actions';
import ModalStyle from './ModalStyle';
import CreateResForm from './CreateResForm';

class BusinessList extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      restaurants: [],
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
  };

  fetchRestaurants(){
    getRestaurantsList().then(
      res => {
        this.setState({
          restaurants: res.data.restaurants
        })
      }
    )
  }

  componentWillMount(){
    getRestaurantsList().then(
      res => {
        this.setState({
          restaurants: res.data.restaurants
        })
      }
    )
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        { this.state.restaurants.length > 0 ?
          (
            <ul>
              {this.state.restaurants.map(restaurant =>
                (<li key={restaurant.id}> <a href="#">{restaurant.name}</a></li>
                )
              )}
            </ul>
          ) :
          (
            <div>
              <div>
                  <span>You have no restaurants, claim one</span>
              </div>
              <button className="btn btn-primary" onClick={this.openModal}>Claim a New Restaurant Page</button>
            </div>
          )
        }
        <CreateNewResModal
          isOpen = {this.state.modalIsOpen}
          onRequestClose = {this.closeModal}
          contentLabel = "Create New Restaurant Label"
          className="modal-dialog"
          style={ModalStyle}
          shouldCloseOnOverlayClick={false}
        >
          <CreateResForm closeModal = {this.closeModal} fetchRestaurants = {this.fetchRestaurants}/>
        </CreateNewResModal>
      </div>
    );
  }
}

export default BusinessList
