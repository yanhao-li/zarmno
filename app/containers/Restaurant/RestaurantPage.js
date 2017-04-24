import React from 'react';
import { fetchRestaurantInfo } from './actions';
import RestaurantInfo from './components/RestaurantInfo';
import Menu from './components/Menu';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class RestaurantPage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      restaurant: this.props.currentRes,
      errors: {}
    }
  }

  componentWillMount(){
    fetchRestaurantInfo(this.state.restaurant.id).then(
      (res) => {
        this.setState({
          ...this.state,
          restaurant:{
            ...this.state.restaurant,
            name: res.data.restaurant.name,
            info: res.data.restaurant.info,
            location: res.data.restaurant.location,
            menu: res.data.menu
          },
        })
      }
    )
  }

  render(){
    const { restaurant } = this.state;
    return(
      <div>
        <RestaurantInfo restaurant={ restaurant }/>
        <Menu restaurant={ restaurant }/>
        <Link to={"/restaurant/" + restaurant.id + "/edit"} className="btn btn-secondary">Edit</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRes: state.get('currentRes'),
  };
}

export default connect(mapStateToProps)(RestaurantPage);
