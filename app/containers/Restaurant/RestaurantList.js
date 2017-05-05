import React from 'react';
import { connect } from 'react-redux';
import BusinessList from './components/BusinessList';
import UserList from './components/UserList';
import { getRestaurantsList } from './actions';


class RestaurantList extends React.PureComponent{

  componentDidMount(){
    this.props.getRestaurantsList();
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
  }
};

export default connect(mapStateToProps, { getRestaurantsList })(RestaurantList);
