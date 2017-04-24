import React from 'react';
import { connect } from 'react-redux';
import BusinessList from './components/BusinessList';
import UserList from './components/UserList';
import { getRestaurantsList, setRestaurantList } from './actions';


class RestaurantList extends React.PureComponent{

  componentWillMount(){
      this.props.getRestaurantsList;
  }

  render(){
    const { user, isAuthenticated } = this.props.auth;

    return(
      <div>
        {user.role == "business" ?
          ( <BusinessList /> ) : ( <UserList/> )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.get('auth'),
    restaurantList: state.get('restaurantList')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurantsList: getRestaurantsList().then(
      res => {
        dispatch(setRestaurantList(res.data.restaurants));
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
