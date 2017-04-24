import axios from 'axios';

export function setRestaurantList(restaurantList){
  return {
    type: 'SET_RES_LIST',
    restaurantList
  }
}

export function registerRes(resData) {
  return axios.post('/api/restaurant', resData);
}

export function getRestaurantsList() {
  return axios.get('/api/restaurant');
}

export function fetchRestaurantInfo(id){
  return axios.get('/api/restaurant/' + id);
}

export function updateResInfo(id, data){
  return axios.put('/api/restaurant/' + id, data);
}
