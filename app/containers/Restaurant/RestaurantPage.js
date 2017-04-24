import React from 'react';
import { fetchRestaurantInfo } from './actions';
import RestaurantInfo from './components/RestaurantInfo';
import Menu from './components/Menu';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class RestaurantPage extends React.PureComponent{

  componentDidMount(){
    this.fetchData()
  }

  fetchData() {
    this.props.fetchRestaurantInfo(this.props.params.id);
  }

  render(){
    let { restaurant } = this.props.currentRes;
    return(
      <div>
        <RestaurantInfo restaurant={ restaurant }/>
        <Menu restaurant={ restaurant }/>
        <Link to={"/restaurant/" + restaurant.info.id + "/edit"} className="btn btn-secondary">Edit</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRes: state.get('currentRes'),
  };
}

const mapDispatchToPros = (dispatch) => {
  return{
    setCurrentRes: (restaurant) => {
      dispatch(setCurrentRes(restaurant));
    },

  };
}

export default connect(mapStateToProps, {fetchRestaurantInfo})(RestaurantPage);
