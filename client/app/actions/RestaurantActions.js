import apiPath from 'utils/apiPath';
import fetchStatusHandler from 'utils/fetchStatusHandler';

export const fetchRestaurantById = (id) => {
  return fetch(apiPath + `/restaurant/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(fetchStatusHandler)
  .then(json => json.restaurant)
}

export const setCurrentRes = (id) => {

};

export const updateResInfo = () => {

};

export const deleteDish = () => {

};

export const addDish = () => {

};
