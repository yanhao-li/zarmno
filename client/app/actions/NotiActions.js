export const closeNoti = {
  type: 'CLOSE_NOTI',
};

export const showNoti = (message, action) => {
  return {
    type: 'SHOW_NOTI',
    message: message,
    action: action
  }
}
