import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getRestaurantsList } from 'actions/RestaurantActions';
import Subheader from 'material-ui/Subheader';
import RestaurantCard from './RestaurantCard';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
`

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
      <Container className="container">
        <Subheader>All restaurants</Subheader>
        <ul className="row">
          {restaurantList.map(restaurant =>
            (
              <li key={restaurant.id}><Link to={'/restaurant/' + restaurant.id}><RestaurantCard restaurant={restaurant}/></Link></li>
              //<li key={restaurant.id}> <Link to={'/restaurant/' + restaurant.id} >{restaurant.name}</Link></li>
            )
          )}
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    restaurantList: state.get('restaurantList')
  }
};

export default connect(mapStateToProps)(RestaurantList);
