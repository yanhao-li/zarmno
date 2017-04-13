import React from 'react';
import { connect } from 'react-redux';
import { getRestaurantsList } from './actions';

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
    return(
      <div>
        { title }
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
