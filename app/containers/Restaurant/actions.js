import axios from 'axios';

export const setRestaurantList = (restaurantList) => {
  return {
    type: 'SET_RES_LIST',
    restaurantList
  };
}

export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
}

export const setCurrentRes = (restaurant) => {
  return {
    type: 'SET_CURRENT_RES',
    restaurant
  }
}

export const registerRes = (resData) => (dispatch) =>
  axios.post('/api/restaurant', resData).then(
    res => {
      dispatch(addRestaurant(res.data.restaurant))
    }
  );


export const getRestaurantsList = () => (dispatch) =>
  axios.get('/api/restaurant').then(
    res => {
      dispatch(setRestaurantList(res.data.restaurants));
    }
  );


export const fetchRestaurantInfo = (id) => (dispatch) =>
  axios.get('/api/restaurant/' + id).then(
    res => {
      dispatch(setCurrentRes(res.data.restaurant));
    }
  );


export const updateResInfo = (id, data) => {
  return axios.put('/api/restaurant/' + id, data);
}
