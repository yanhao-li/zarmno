import React from 'react';
import Chip from 'material-ui/Chip';
import { toggleFavorite } from 'actions/FavoritesActions';

class FavoriteButton extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isFavorite: false,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { restaurant } = this.props;
    const { restaurants } = nextProps.favorites;
    for (const x in restaurants) {
      if (restaurants[x].info.id == restaurant.info.id) {
        this.setState({
          isFavorite: true,
        });
        break;
      }
    }
  }

  toggleFavorite(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { restaurant } = this.props;
    this.setState({
      isFavorite: !this.state.isFavorite,
    });
    dispatch(toggleFavorite(this.state.isFavorite, restaurant.info.id));
  }

  render() {
    const { isFavorite } = this.state;
    return (
      <Chip
        backgroundColor={isFavorite ? '#3F51B5' : '#EC407A'}
        labelColor="white"
        onClick={this.toggleFavorite}
        style={{ marginLeft: 30 }}
      >
        {isFavorite ? 'Remove From Favorite' : 'Save to Favorites'}
      </Chip>
    );
  }
}

export default FavoriteButton;
