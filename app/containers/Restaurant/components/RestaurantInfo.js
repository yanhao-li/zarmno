import React from 'react';

class RestaurantInfo extends React.PureComponent{
  render(){
    const restaurant = this.props.restaurant.info;
    return(
      <div>
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.location}</h1>
        { restaurant.info ? <p>{restaurant.info}</p> : <p>This restaurant hasn't added information yet</p>}
      </div>
    );
  }
};

export default RestaurantInfo;
