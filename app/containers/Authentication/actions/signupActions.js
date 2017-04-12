import axios from 'axios';

export function userSignupRequest(userData) {
  return axios.post('/api/user', userData);
}
