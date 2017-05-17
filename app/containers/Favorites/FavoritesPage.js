import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from 'containers/Restaurant/actions';
import { Link } from 'react-router';

class FavoritesPage extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount(){
    const {auth} = this.props;
    const {favorites} = auth;
    const promises = favorites.map((id) => {
      return fetchRestaurant(id).then((rst) => {
        return rst
      })
    })
    Promise.all(promises).then((rst) => {
      this.setState({
        restaurants: rst
      })
    })
  }

  componentWillReceiveProps(nextProps){
    const { dispatch, auth } = nextProps;
    const { favorites } = auth;
    const promises = favorites.map((id) => {
      return fetchRestaurant(id).then((rst) => {
        return rst
      })
    })
    Promise.all(promises).then((rst) => {
      this.setState({
        restaurants: rst
      })
    })
  }

  render(){
    const { restaurants } = this.state
    return(
      <div>
        <h1>My favorites</h1>
        <ul>
          {restaurants.map(restaurant =>
            (<li key={restaurant.info.id}> <Link to={'/restaurant/' + restaurant.info.id} >{restaurant.info.name}</Link></li>
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
  }
}

export default connect(mapStateToProps)(FavoritesPage);
