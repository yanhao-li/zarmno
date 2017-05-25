import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantById } from 'actions/RestaurantActions';
import { Link } from 'react-router';
import Subheader from 'material-ui/Subheader'
import RestaurantCard from 'containers/Restaurant/Common/RestaurantCard'

class FavoritesPage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      restaurants: this.props.favorites.restaurants,
    };
  }

  componentWillReceiveProps(nextProps){
    const { favorites } = nextProps;
    const { restaurants } = favorites;
    this.setState({
      restaurants: restaurants
    })
  }

  render(){
    const { isFetching } = this.props.favorites;
    const { restaurants } = this.state;

    if(isFetching) {
      return(
        <div> Loading </div>
      )
    }

    return(
      <div className="container">
        <Subheader>My favorites</Subheader>
        <ul className="row">
          {restaurants.map(restaurant =>
            (<li key={restaurant.info.id}> <Link to={'/restaurant/' + restaurant.info.id}><RestaurantCard restaurant={ restaurant.info }/></Link></li>
            )
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.get('auth'),
    favorites: state.get('favorites')
  }
}

export default connect(mapStateToProps)(FavoritesPage);
