import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { fetchFavorites } from './FavoritesActions';
import { api } from 'utils/appPath';
import fetchStatusHandler from 'utils/fetchStatusHandler';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user,
  };
}

export const initAuth = () => (dispatch) => {
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
      dispatch({
        type: 'FETCH_FAVORITES_REQUEST',
      });
      dispatch(fetchFavorites())
        .then(() =>
          dispatch({
            type: 'FETCH_FAVORITES_SUCCESS',
          })
        )
        .catch(() =>
          dispatch({
            type: 'FETCH_FAVORITES_FAILURE',
          })
        );
    }
  }
};

export const login = (loginData) =>
  (dispatch) => {
    return fetch(api.root + '/authtoken',
      {
        method: 'post',
        body: loginData
      })
      .then(fetchStatusHandler)
      .then(json => {
        const token = json.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        const user = jwtDecode(token);
        dispatch(setCurrentUser(user));
      })
  }

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export function getAuth() {
  return (dispatch) =>
    axios.get('/api/v1/session').then(
      (res) => {
        dispatch(setCurrentUser(res.data.user));
      }
    );
}

export function userSignupRequest(userData) {
  return axios.post('/api/v1/user', userData);
}
