import setAuthorizationToken from 'utils/setAuthorizationToken';
import { setCurrentUser } from './loginAction';

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
 }
}
