import React from 'react';
import { fetchRestaurantById } from 'actions/RestaurantActions';

class RestaurantPage extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      isFetching: false,
      restaurant: [],
      menu: [],
    };
    this.fetchRestaurant = this.fetchRestaurant.bind(this);
  };

  componentDidMount(){
    this.fetchRestaurant();
  };

  fetchRestaurant(){
    const { params } = this.props;
    const id = params.id;
    this.setState({
      isFetching: true,
    });
    fetchRestaurantById(id)
    .then(
      restaurant => {
        this.setState({
          isFetching: false,
          restaurant: restaurant,
        })
      }
    )
  };

  render(){
    return(
      <div>
        RestaurantPage
      </div>
    )
  }
}

export default RestaurantPage;
