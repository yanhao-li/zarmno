import React from 'react';
import { fetchRestaurantInfo } from './actions';

class RestaurantInfo extends React.PureComponent{
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
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.location}</h1>
        { restaurant.info ? <p>{restaurant.info}</p> : <p>This restaurant hasn't added information yet</p>}
      </div>
    );
  }
}

export default RestaurantInfo;
