import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import DishPage from 'containers/Restaurant/DishPage';
import DishDeleteButton from '../Business/DishDeleteButton';

const styles = {
  card: {
    position: 'relative',
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


class DishCard extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      cardDepth: 0,
      modalIsOpen: false,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      modalIsOpen: true,
    });
  }

  handleClose() {
    this.setState({
      modalIsOpen: false,
    });
  }

  onMouseEnter() {
    this.setState({
      cardDepth: 2,
    });
  }

  onMouseLeave() {
    this.setState({
      cardDepth: 0,
    });
  }

  deleteDish(e) {
    const { dish } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteDish(dish));
    this.props.closeModal();
  }

  render() {
    const { dish, auth } = this.props;
    return (
      <Card style={styles.card} zDepth={this.state.cardDepth} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onTouchTap={this.handleOpen}>
        {auth.user.role === 'business' && (<DishDeleteButton {...this.props} />)}
        <CardMedia style={styles.card.CardImg}>
          <img src="https://s3-media4.fl.yelpcdn.com/bphoto/kYZOjS_Vd8R88qTYYU3aYQ/l.jpg" />
        </CardMedia>
        <CardTitle title={dish.name} titleColor="#757575" titleStyle={{ fontSize: '24px', fontWeight: '100' }} />
        <CardText color="#757575">
          {dish.description}
        </CardText>
        <Dialog
          modal={false}
          open={this.state.modalIsOpen}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
          contentStyle={{ width: '80%', maxWidth: 'none' }}
        >
          <DishPage closeModal={this.handleClose} {...this.props} />
        </Dialog>
      </Card>
    );
  }
}

export default DishCard;
