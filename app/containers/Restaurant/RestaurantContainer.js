import React from 'react';
import {connect} from 'react-redux';
import CustomerPage from './Customer/RestaurantPage';
import BusinessPage from './Business/RestaurantPage';

class RestaurantContainer extends React.PureComponent{
  render(){
    const { role } = this.props.auth.user

    if(role === 'business'){
      return <BusinessPage {...this.props}/>;
    } else {
      return <CustomerPage {...this.props}/>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.get('auth'),
    restaurant: state.get('restaurant'),
    favorites: state.get('favorites')
  }
}

export default connect(mapStateToProps)(RestaurantContainer);
