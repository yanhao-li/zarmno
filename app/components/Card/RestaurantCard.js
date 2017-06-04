import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const propTypes = {
  restaurant: PropTypes.object.isRequired,
};

const styles = {
  card: {
    height: '384px',
    width: '250px',
    backgroundColor: '#f6f6f6',
    margin: '10px 5px 10px 5px',
    CardImg: {
      width: '100%',
      height: '250px',
      overflow: 'hidden',
    },
  },
};

class RestaurantCard extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      cardDepth: 0,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter = () => {
    this.setState({
      cardDepth: 2,
    });
  }

  onMouseLeave = () => {
    this.setState({
      cardDepth: 0,
    });
  }

  render() {
    const { restaurant } = this.props;
    return (
      <Card style={styles.card} zDepth={this.state.cardDepth} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <CardMedia style={styles.card.CardImg}>
          <img src="https://s3-media4.fl.yelpcdn.com/bphoto/kYZOjS_Vd8R88qTYYU3aYQ/l.jpg" alt="The Restaurant" />
        </CardMedia>
        <CardTitle title={restaurant.name} titleColor="#757575" titleStyle={{ fontSize: '24px', fontWeight: '100' }} />
        <CardText color="#757575">
          {restaurant.location}
        </CardText>

      </Card>
    );
  }
}

RestaurantCard.propTypes = propTypes;

export default RestaurantCard;
