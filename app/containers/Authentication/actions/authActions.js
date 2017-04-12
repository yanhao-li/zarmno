import axios from 'axios';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user,
  };
}

export function login(data) {
  return (dispatch) => axios.post('/api/session', data).then(
      (res) => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
      }
    );
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function getAuth() {
  return (dispatch) => axios.get('/api/session').then(
      (res) => {
        dispatch(setCurrentUser(res.data.user));
      }
    );
}
