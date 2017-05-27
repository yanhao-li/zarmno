import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getRestaurantsList } from 'actions/RestaurantActions';
import Subheader from 'material-ui/Subheader';
import RestaurantCard from './RestaurantCard';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const styles = {
  paper: {
    backgroundColor: 'white',
    height: '100%',
    marginTop: 30,
  },
};

class RestaurantList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [],
    };
  }

  componentDidMount() {
    getRestaurantsList.then(
      (res) => {
        if (res.data.restaurants) {
          this.setState({
            restaurantList: res.data.restaurants,
          });
        }
      }, (err) => {
      console.log(err);
    }
    );
  }

  render() {
    const { restaurantList } = this.state;
    return (
      <Paper className="container" style={styles.paper}>
        <Subheader>All restaurants</Subheader>
        <ul className="row">
          {restaurantList.map((restaurant) =>
            (
              <li key={restaurant.id}><Link to={`/restaurant/${restaurant.id}`}><RestaurantCard restaurant={restaurant} /></Link></li>
              // <li key={restaurant.id}> <Link to={'/restaurant/' + restaurant.id} >{restaurant.name}</Link></li>
            )
          )}
        </ul>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantList: state.get('restaurantList'),
});

export default connect(mapStateToProps)(RestaurantList);
