import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class UserList extends React.PureComponent{
  render(){
    const {restaurantList} = this.props;
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantList: state.get('restaurantList')
  }
}
export default connect(mapStateToProps)(UserList)
