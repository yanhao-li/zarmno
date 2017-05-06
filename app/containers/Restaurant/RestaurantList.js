import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getRestaurantsList } from './actions';


class RestaurantList extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      restaurantList: []
    };
  }

  componentDidMount(){
    getRestaurantsList.then(
      (res) => {
        if(res.data.restaurants){
          this.setState({
            restaurantList: res.data.restaurants
          })
        }
      }, (err) => {
        console.log(err)
      }
    );
  }

  render(){
    const {restaurantList} = this.state;
    return(
      <div>
        <h1> All restaurants </h1>
        <ul>
          {restaurantList.map(restaurant =>
            (<li key={restaurant.id}> <Link to={'/restaurant/' + restaurant.id} >{restaurant.name}</Link></li>
            )
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    restaurantList: state.get('restaurantList')
  }
};

export default connect(mapStateToProps)(RestaurantList);
