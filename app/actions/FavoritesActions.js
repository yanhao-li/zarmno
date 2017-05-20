import axios from 'axios';

function setFavorites(favorites){
  return {
    type: 'SET_FAVORITES',
    favorites
  }
}

export const fetchFavorites = () => {
  return dispatch =>
    axios.get('/api/v1/favorite').then(
      (res) => {
        const { favorites } = res.data;
        dispatch(setFavorites(favorites))
      }
    )
}

export const toggleFavorite = (isFavorite, restaurantId) => (dispatch) => {
  if (!isFavorite){
    axios.post('/api/v1/favorite/' + restaurantId).then(
      res => {
      }
    )
  } else {
    axios.delete('/api/v1/favorite/' + restaurantId).then(
      res => {

      }
    )
  }
}
