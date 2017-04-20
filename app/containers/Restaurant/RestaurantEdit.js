import React from 'react';
import { fetchRestaurantInfo } from './actions';
import EditRestaurantInfo from './components/EditRestaurantInfo'
import EditMenu from './components/EditMenu';
import { Link } from 'react-router';

class RestaurantEdit extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      restaurant: {
        id: this.props.params.id,
        name: "",
        locaiton: "",
        info: "",
        menu: []
      },
      errors: {},
    };
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
        <EditRestaurantInfo restaurant={ restaurant }/>
        <EditMenu restaurant={ restaurant }/>
      </div>
    );
  }
}

export default RestaurantEdit;
