import React from 'react';
import { fetchRestaurantInfo } from './actions';
import RestaurantInfo from './components/RestaurantInfo';
import Menu from './components/Menu';

class RestaurantPage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      restaurant: {
        id: this.props.params.id,
        name: "",
        locaiton: "",
        info: ""
      },
      errors: {

      }
    }
  }

  componentWillMount(){
    fetchRestaurantInfo(this.state.restaurant.id).then(
      (res) => {
        this.setState({
          restaurant:{
            name: res.data.restaurant.name,
            info: res.data.restaurant.info,
            location: res.data.restaurant.location
          }
        })
      }
    )
  }

  render(){
    const { restaurant } = this.state;
    return(
      <div>
        <RestaurantInfo restaurant={ restaurant }/>
        <Menu />
      </div>
    );
  }
}

export default RestaurantPage;
