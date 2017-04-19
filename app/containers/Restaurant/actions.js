import axios from 'axios';

export function registerRes(resData) {
  return axios.post('/api/restaurant', resData);
}

export function getRestaurantsList() {
  return axios.get('/api/restaurant');
}

export function fetchRestaurantInfo(id){
  return axios.get('/api/restaurant/' + id);
}
