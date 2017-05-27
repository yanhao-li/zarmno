import axios from 'axios';
import { fetchRestaurantById } from './RestaurantActions';

function setFavorites(favorites) {
  return {
    type: 'SET_FAVORITES',
    favorites,
  };
}

function appendFavorite(restaurant) {
  return {
    type: 'APPEND_FAVORITE',
    restaurant,
  };
}

function removeFavorite(restaurantId) {
  return {
    type: 'REMOVE_FAVORITE',
    restaurantId,
  };
}

export const fetchFavorites = () => (dispatch) =>
    axios.get('/api/v1/favorite')
      .then(
        (res) => {
          const FavoritesIds = res.data.favorites;
          const favoritesPromises = FavoritesIds.map((id) => dispatch(fetchRestaurantById(id))
              .then((restaurant) => restaurant));
          Promise.all(favoritesPromises)
            .then((favorites) => dispatch(setFavorites(favorites)));
        }
      )
      .catch(
        (err) => {

        }
      );

export const toggleFavorite = (isFavorite, restaurantId) => (dispatch) => {
  if (!isFavorite) {
    axios.post(`/api/v1/favorite/${restaurantId}`).then(
      () => {
        dispatch(fetchRestaurantById(restaurantId)).then(
          (restaurant) => dispatch(appendFavorite(restaurant))
        );
      }
    );
  } else {
    axios.delete(`/api/v1/favorite/${restaurantId}`).then(
      () => {
        dispatch(removeFavorite(restaurantId));
      }
    );
  }
};
