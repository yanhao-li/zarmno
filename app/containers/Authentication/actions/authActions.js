import axios from 'axios';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user,
  };
}

export function login(data) {
  return (dispatch) => {
    return axios.post('/api/session', data).then(
      res => {
        dispatch(setCurrentUser(res.data.user));
      }
    )
  };
}

export function logout() {
  return (dispatch) => {
    return axios.delete('/api/session').then(
          dispatch(setCurrentUser({}))
    );
 }
}

export function getAuth() {
  return (dispatch) => {
    return axios.get('/api/session').then(
      res => {
        console.log("res");
        dispatch(setCurrentUser(res.data.user));
      }
    )
  }
}
