import React from 'react';
import { connect } from 'react-redux';
import { getRestaurantsList } from './actions';
import Modal from 'components/Modal';
import CreateResForm from './components/CreateResForm';

class RestaurantList extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      restaurants: [],
    };
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

  render(){
    let title = (<h1>Restaurantlist</h1>);
    const { user, isAuthenticated } = this.props.auth;
    if (user.role === 'customer') {
      title = (<h1>My Favoriate Restaurants</h1>);
    } else if (user.role === 'business') {
      title = (<h1>Dashboard</h1>);
    } else {
      title = (<h1>Please log in to see the page</h1>)
    }

    let restaurantsList;
    if (this.state.restaurants.length > 0) {
      restaurantsList=(
        <ul>
          {this.state.restaurants.map(restaurant =>
            (<li key={restaurant.id}> <a href="#">{restaurant.name}</a></li>
            )
          )}
        </ul>
      )
    } else {
      restaurantsList=(
        <div>
          <span>You have no restaurants, claim one</span>
          <br />
        </div>
      )
    }
    return(
      <div>
        { title }
        { restaurantsList }
        <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Claim a New Restaurant Page</button>
        <Modal title="Claim a new restaurant" close="close" submit="submit">
          <CreateResForm />
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    auth: state.get('auth')
  }
};

export default connect(mapStateToProps)(RestaurantList);
