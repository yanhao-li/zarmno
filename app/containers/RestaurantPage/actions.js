import axios from 'axios';

export function registerRes(resData) {
  return () => axios.post('/api/restaurant', resData);
}
