import axios from 'axios';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user,
  };
}

export const initAuth = () => {
  return dispatch => {
    if (localStorage.jwtToken) {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        let user = {};
        try {
          user = jwtDecode(token);
        } catch (e) {
          throw new Error('invalid Token');
        }
        setAuthorizationToken(token);
        dispatch(setCurrentUser(user));
      }
    }
  }
};

export const login = (user) => {
  return (dispatch) => axios.post('/api/v1/session', user).then(
      (res) => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        const user = jwtDecode(token);
        dispatch(setCurrentUser(user));
      }
    );
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function getAuth() {
  return (dispatch) => axios.get('/api/v1/session').then(
      (res) => {
        dispatch(setCurrentUser(res.data.user));
      }
    );
}

export function userSignupRequest(userData) {
  return axios.post('/api/user', userData);
}
