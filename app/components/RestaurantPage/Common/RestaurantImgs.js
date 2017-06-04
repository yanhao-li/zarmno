import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

class RestaurantImgs extends React.PureComponent {
  render() {
    return (
      <Card style={{ height: 250, width: 250, float: 'right', margin: 30 }}>
        <CardMedia
          overlay={<CardTitle title="more images"> </CardTitle>}
          style={{ height: '250px' }}
        >
          <img src="https://media.timeout.com/images/100666581/image.jpg" style={{ width: '250px', height: '250px' }} alt="restaurant" />
        </CardMedia>
      </Card>
    );
  }
}

export default RestaurantImgs;
