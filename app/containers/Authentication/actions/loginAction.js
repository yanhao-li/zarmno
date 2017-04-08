import axios from 'axios';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function login(data) {
  return () => axios.post('/api/login', data)
}
