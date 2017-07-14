import React from 'react';
import SpinKit from 'components/SpinKit';
import RestaurantHeader from 'components/RestaurantPage/RestaurantHeader/index';
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
    const { isFetching, restaurant } = this.state;

    if (isFetching) {
      return <p>Loading</p>
    }

    return(
      <div>
        <RestaurantHeader restaurant={restaurant} />
      </div>
    )
  }
}

export default RestaurantPage;
