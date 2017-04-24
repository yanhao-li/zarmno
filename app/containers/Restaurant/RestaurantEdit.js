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
