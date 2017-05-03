import React from 'react';
import { fetchRestaurantInfo } from './actions';
import EditRestaurantInfo from './components/EditRestaurantInfo'
import EditMenu from './components/EditMenu';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class RestaurantEdit extends React.PureComponent{

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    this.props.fetchRestaurantInfo(this.props.params.id);
  }

  render(){
    const { restaurant } = this.props.currentRes;
    return(
      <div>
        <EditRestaurantInfo restaurant={ restaurant }/>
        <EditMenu restaurant={ restaurant }/>
        <Link to={'/restaurant/' + restaurant.info.id}><button className="btn btn-secondary btn-sm">Go back</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      currentRes: state.get('currentRes'),
  }
}

export default connect(mapStateToProps, {fetchRestaurantInfo})(RestaurantEdit);
