import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { fetchFavorites } from './FavoritesActions';
import apiPath from 'utils/apiPath';
import fetchStatusHandler from 'utils/fetchStatusHandler';
import { showNoti } from 'actions/NotiActions';

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

export const login = (auth) =>
  (dispatch) => {
    return fetch(apiPath + '/authtoken',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth)
      })
      .then(fetchStatusHandler)
      .then(json => {
        const token = json.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        const user = jwtDecode(token);
        dispatch(setCurrentUser(user));
        dispatch(showNoti("Login Successful", "OK"));
      })
  }

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
  dispatch(showNoti("Logged out", "OK"))
};

export const signup = (auth) =>
  (dispatch) => {
    return fetch(apiPath + '/user',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth)
      })
      .then(fetchStatusHandler)
      .then(() => dispatch(login(auth)))
  }
