import axios from 'axios';

export function addDishes(data) {
  return () => axios.post('/api/dishes', data);
}
