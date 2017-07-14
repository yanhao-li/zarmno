import React from 'react';
import Paper from 'material-ui/Paper';

class RestaurantHeader extends React.PureComponent {
  render(){
    const { restaurant } = this.props;
    const { name, coverImgUrl, street1, city, state, zipcode, rating, phone } = restaurant;
    return(
      <div>
        <Paper>
          <h1>{name}</h1>
          <img src={coverImgUrl} height="200"/>
          <address>
            {street1}<br/>
            {city}
            ,{state}<br />
            {zipcode}
          </address>
          <p>{phone}</p>
          <p>{rating}</p>
        </Paper>
      </div>
    )
  }
}

export default RestaurantHeader;
