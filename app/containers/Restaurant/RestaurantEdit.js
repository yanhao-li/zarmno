import React from 'react';
import EditRestaurantInfo from './components/EditRestaurantInfo'
import EditMenu from './components/EditMenu';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchRestaurant } from './actions';

class RestaurantEdit extends React.PureComponent{

  componentDidMount(){
    this.props.fetchRestaurant(this.props.params.id);
  }

  render(){
    const { info, menu } = this.props.currentRes;
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
      currentRes: state.get('currentRes'),
  }
}

export default connect(mapStateToProps, {fetchRestaurant})(RestaurantEdit);
