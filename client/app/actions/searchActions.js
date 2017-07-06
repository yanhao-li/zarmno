import apiPath from 'utils/apiPath';
import fetchStatusHandler from 'utils/fetchStatusHandler';

export const searchByNameOrId = (key) => {
  return fetch(apiPath + `/search/?key=${key}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(fetchStatusHandler)
  .then(json => json.restaurants)
}
