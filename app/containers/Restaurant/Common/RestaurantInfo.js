import React from 'react';
import { toggleFavorite } from 'actions/RestaurantActions';
import { connect } from 'react-redux';

class RestaurantInfo extends React.PureComponent{

  render(){
    const { restaurant } = this.props;
    const { info } = restaurant;
    return(
      <div>
        <h1>{info.name}</h1>
        <h1>{info.location}</h1>
        { info.description ? <p>{info.description}</p> : <p>This restaurant hasn't added information yet</p>}
      </div>
    );
  }
};

export default connect()(RestaurantInfo);
