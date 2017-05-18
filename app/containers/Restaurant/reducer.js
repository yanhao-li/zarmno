import { combineReducers } from 'redux';

const info = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESTAURANT_INFO':
      return action.info
    case 'UPDATE_RESTAURANT_INFO':
      return action.info
    default:
      return state
  };
};

const menu = (state = [], action) => {
  switch (action.type) {
    case 'SET_RESTAURANT_MENU':
      return action.menu
    case 'UPDATE_DISH':
      return state.map(dish => {
              if (dish.id == action.dish.id) {
                dish = action.dish
              }
              return dish
          })
    case 'ADD_DISH':
      return [...state, action.dish]
    case 'DELETE_DISH':
      return state.filter(dish => dish.id !== action.dish.id)
    default:
      return state
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANT_REQUEST':
      return true
    case 'FETCH_RESTAURANT_SUCCESS':
    case 'FETCH_RESTAURANT_FAILURE':
      return false
    default:
      return state
  }
};


const restaurant = combineReducers({
  info,
  menu,
  isFetching
});


export default restaurant;

export const getIsFetching = (state) => state.isFetching;
