import React from 'react';
import { connect } from 'react-redux';
import BusinessList from './components/BusinessList';
import UserList from './components/UserList';


class RestaurantList extends React.PureComponent{

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
  console.log(state);
  return{
    auth: state.get('auth'),
  }
};

export default connect(mapStateToProps)(RestaurantList);
