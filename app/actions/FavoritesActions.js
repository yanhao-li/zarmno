import axios from 'axios';

function setFavorites(favorites){
  return {
    type: 'SET_FAVORITES',
    favorites
  }
}

const fetchFavorites = () => {
  return dispatch =>
    axios.get('/api/v1/favorite').then(
      (res) => {
        const { favorites } = res.data;
        dispatch(setFavorites(favorites))
      }
    )
}
