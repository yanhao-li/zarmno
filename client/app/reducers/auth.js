import isEmpty from 'lodash/isEmpty';
import { combineReducers } from 'redux';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_AUTH_REQUEST':
      return true;
    case 'FETCH_AUTH_SUCCESS':
    case 'FETCH_AUTH_FAILURE':
      return false;
    default:
      return state;
  }
};

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return !isEmpty(action.user);
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user;
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  isAuthenticated,
  user,
});
