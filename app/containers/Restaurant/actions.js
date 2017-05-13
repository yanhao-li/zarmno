import axios from 'axios';

export const setCurrentResInfo = (info) => {
  return {
    type: 'SET_CURRENT_RES_INFO',
    info
  }
};

export const setCurrentResMenu = (menu) => {
  return {
    type: 'SET_CURRENT_RES_MENU',
    menu
  }
}

export const updateResInfoView = (restaurant) => {
  return {
    type: 'UPDATE_RES_INFO',
    restaurant
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

export const toggleLike = (id) => (dispatch) => {
  
}

export const registerRes = (resData) => (dispatch) =>
  axios.post('/api/restaurant', resData).then(
    res => {
      dispatch(setCurrentResInfo(res.data.restaurant))
    }
  );

export const getRestaurantsList = axios.get('/api/v1/restaurant');

export const fetchRestaurant = (id) => (dispatch) =>
  axios.get('/api/v1/restaurant/' + id).then(
    res => {
      dispatch(setCurrentResInfo(res.data.restaurant.info));
      dispatch(setCurrentResMenu(res.data.restaurant.menu));
    }
  );

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
