import { combineReducers } from 'redux';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITES_REQUEST':
      return true;
    case 'FETCH_FAVORITES_SUCCESS':
    case 'FETCH_FAVORITES_FAILURE':
      return false;
    default:
      return state;
  }
};

const restaurants = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.favorites;
    case 'APPEND_FAVORITE':
      return [...state, action.restaurant];
    case 'REMOVE_FAVORITE':
      return state.filter((restaurant) => restaurant.info.id !== action.restaurantId);
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  restaurants,
});
