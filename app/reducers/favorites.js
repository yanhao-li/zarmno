import { combineReducers } from 'redux';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITES_REQUEST':
      return true
    case 'FETCH_FAVORITES_SUCCESS':
    case 'FETCH_FAVORITES_FAILURE':
      return false
    default:
      return state
  }
};

const restaurants = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.favorites
    default:
      return state
  }
}

export default combineReducers({
  isFetching,
  restaurants
});
