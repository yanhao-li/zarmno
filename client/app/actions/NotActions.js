export const closeNot = {
  type: 'CLOSE_NOT',
};

export const showNot = (message, action) => {
  return {
    type: 'SHOW_NOT',
    message: message,
    action: action
  }
}
