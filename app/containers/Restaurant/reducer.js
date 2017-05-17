const initResInfo = {
  info: {},
  menu: []
}

export const restaurant = (state = initResInfo, action) => {
  switch (action.type) {
    case 'SET_CURRENT_RES_INFO':
      return {
        ...state,
        info: action.info
      };

    case 'SET_CURRENT_RES_MENU':
      return {
        ...state,
        menu: action.menu
      }

    case 'UPDATE_RES_INFO':
      return {
        ...state,
        info: action.restaurant
      };

    case 'UPDATE_DISH':
      return {
        ...state,
        menu:
          state.menu.map(dish => {
            if (dish.id == action.dish.id) {
              dish = action.dish
            }
            return dish
          })
      };

    case 'ADD_DISH':
      return {
        ...state,
        menu:
          [
            ...state.menu,
            action.dish
          ]
      };

    case 'DELETE_DISH':
      return {
        ...state,
        menu:
          state.menu.filter(dish => {
            return dish.id !== action.dish.id
          })
      };

    default:
      return state;
  }
};
