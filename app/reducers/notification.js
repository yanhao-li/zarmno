const initState = {
  isOpen: false,
  message: '',
  action: 'OK'
}

const notification = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_NOT':
      return {
        isOpen: true,
        message: action.message,
        action: action.action,
      }
    case 'CLOSE_NOT':
      return {
        isOpen: false,
        message: '',
        action: 'OK'
      }
    default:
      return state;
  }
};

export default notification;
