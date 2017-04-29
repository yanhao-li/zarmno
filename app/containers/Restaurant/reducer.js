const initResInfo = {
  restaurant:{
    info: {
      id: '',
      name: ''
    },
    menu: []
  }
}

export const currentRes = (state = initResInfo, action) => {
  switch (action.type) {
    case 'SET_CURRENT_RES':
      return {
        restaurant: action.restaurant
      };
    case 'UPDATE_DISH':
      let newMenu = state.restaurant.menu.map(dish => {
        if (dish.id == action.dish.id) {
          dish = action.dish
        }
        return dish
      }
      );
      return {
        restaurant: {
          ...state.restaurant,
          menu: newMenu
        }
      };
    default:
      return state;
  }
};

export const restaurantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_RES_LIST':
      return action.restaurantList;
    case 'ADD_RESTAURANT':
      return [
        ...state,
        action.restaurant
      ];
    default: return state;
  }
};
