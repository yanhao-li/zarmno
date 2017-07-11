export const setCurrentResInfo = (info) => ({
  type: 'SET_RESTAURANT_INFO',
  info,
});

export const setCurrentResMenu = (menu) => ({
  type: 'SET_RESTAURANT_MENU',
  menu,
});

export const fetchRestaurantById = (id) => (dispatch) => {
  dispatch({
    type: 'FETCH_RESTAURANT_REQUEST',
  });

  return axios.get(`/api/v1/restaurant/${id}`)
  .then(
    (res) => {
      dispatch({
        type: 'FETCH_RESTAURANT_SUCCESS',
        response: res.data.restaurant,
      });
      return res.data.restaurant;
    }
  )
  .catch(
    (err) => {
      dispatch({
        type: 'FETCH_RESTAURANT_FAILURE',
        message: err,
      });
    }
  );
};

export const setCurrentRes = (id) => (dispatch) => {
  dispatch(fetchRestaurantById(id)).then(
      (restaurant) => {
        dispatch(setCurrentResInfo(restaurant.info));
        dispatch(setCurrentResMenu(restaurant.menu));
      }
    );
};
