import axios from 'axios';

export const setCurrentResInfo = (info) => {
  return {
    type: 'SET_RESTAURANT_INFO',
    info
  }
};

export const setCurrentResMenu = (menu) => {
  return {
    type: 'SET_RESTAURANT_MENU',
    menu
  }
}

export const updateResInfoView = (info) => {
  return {
    type: 'UPDATE_RESTAURANT_INFO',
    info
  }
};

export const updateDishView = (dish) => {
  return {
    type: 'UPDATE_DISH',
    dish
  }
};

export const addDishView = (dish) => {
  return {
    type: 'ADD_DISH',
    dish
  }
};

export const deleteDishView = (dish) => {
  return {
    type: 'DELETE_DISH',
    dish
  }
};

export const registerRes = (restaurant) => (dispatch) =>
  axios.post('/api/v1/restaurant', restaurant).then(
    res => {
      dispatch(setCurrentResInfo(res.data.restaurant))
    }
  );

export const getRestaurantsList = axios.get('/api/v1/restaurant');

export const fetchRestaurant = (id) =>
  axios.get('/api/v1/restaurant/' + id).then(
    res => {
      return res.data.restaurant
    }
  );

export const setCurrentRes = (id) => (dispatch) => {
  fetchRestaurant(id).then((restaurant) => {
    dispatch(setCurrentResInfo(restaurant.info));
    dispatch(setCurrentResMenu(restaurant.menu));
  })
}

export const updateResInfo = (id, data) => (dispatch) =>
  axios.put('/api/v1/restaurant/' + id, data).then(
    res => {
      dispatch(updateResInfoView(res.data.restaurant));
    }
  );

export const updateDish = (dish) => (dispatch) =>
  axios.put('/api/v1/dish/' + dish.id, dish).then(
    res => {
      dispatch(updateDishView(res.data.dish));
    }
  );

export const addDish = (dish) => (dispatch) =>
  axios.post('/api/v1/dish', dish).then(
    res => {
      dispatch(addDishView(res.data.dish));
    }
  )

export const deleteDish = (dish) => (dispatch) =>
  axios.delete('/api/v1/dish/' + dish.id).then(
    res => {
      dispatch(deleteDishView(dish));
    }
  )

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
