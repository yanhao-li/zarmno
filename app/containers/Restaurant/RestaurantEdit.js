import React from 'react';
import EditRestaurantInfo from './components/EditRestaurantInfo'
import EditMenu from './Menu/EditMenu';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchRestaurant } from 'actions/RestaurantActions';

class RestaurantEdit extends React.PureComponent{

  componentDidMount(){
    this.props.fetchRestaurant(this.props.params.id);
  }

  render(){
    const { info, menu } = this.props.restaurant;
    return(
      <div>
        <EditRestaurantInfo info={ info }/>
        <EditMenu menu={ menu }/>
        <Link to={'/restaurant/' + info.id}><button className="btn btn-secondary btn-sm">Go back</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      restaurant: state.get('restaurant'),
  }
}

export default connect(mapStateToProps, {fetchRestaurant})(RestaurantEdit);
