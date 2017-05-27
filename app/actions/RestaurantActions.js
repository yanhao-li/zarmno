import axios from 'axios';

export const setCurrentResInfo = (info) => ({
  type: 'SET_RESTAURANT_INFO',
  info,
});

export const setCurrentResMenu = (menu) => ({
  type: 'SET_RESTAURANT_MENU',
  menu,
});

export const updateResInfoView = (info) => ({
  type: 'UPDATE_RESTAURANT_INFO',
  info,
});

export const updateDishView = (dish) => ({
  type: 'UPDATE_DISH',
  dish,
});

export const addDishView = (dish) => ({
  type: 'ADD_DISH',
  dish,
});

export const deleteDishView = (dish) => ({
  type: 'DELETE_DISH',
  dish,
});

export const registerRes = (restaurant) => (dispatch) =>
  axios.post('/api/v1/restaurant', restaurant).then(
    (res) => {
      dispatch(setCurrentResInfo(res.data.restaurant));
    }
  );

export const getRestaurantsList = axios.get('/api/v1/restaurant');

export const fetchRestaurantById = (id) => (dispatch) => {
  dispatch({
    type: 'FETCH_RESTAURANT_REQUEST',
  });

  return axios.get(`/api/v1/restaurant/${id}`)
  .then(
    (res) => {
      dispatch({
        type: 'FETCH_RESTAURANT_SUCCESS',
        response: res.data.restaurant,
      });
      return res.data.restaurant;
    }
  )
  .catch(
    (err) => {
      dispatch({
        type: 'FETCH_RESTAURANT_FAILURE',
        message: err,
      });
    }
  );
};

export const setCurrentRes = (id) => (dispatch) => {
  dispatch(fetchRestaurantById(id)).then(
      (restaurant) => {
        dispatch(setCurrentResInfo(restaurant.info));
        dispatch(setCurrentResMenu(restaurant.menu));
      }
    );
};

export const updateResInfo = (id, newInfo) => (dispatch) =>
  axios.put(`/api/v1/restaurant/${id}`, newInfo).then(
    (res) => {
      dispatch(updateResInfoView(res.data.restaurant));
    }
  );

export const updateDish = (dish) => (dispatch) =>
  axios.put(`/api/v1/dish/${dish.id}`, dish).then(
    (res) => {
      dispatch(updateDishView(res.data.dish));
    }
  );

export const addDish = (dish) => (dispatch) =>
  axios.post('/api/v1/dish', dish).then(
    (res) => {
      dispatch(addDishView(res.data.dish));
    }
  );

export const deleteDish = (dish) => (dispatch) =>
  axios.delete(`/api/v1/dish/${dish.id}`).then(
    () => {
      dispatch(deleteDishView(dish));
    }
  );
