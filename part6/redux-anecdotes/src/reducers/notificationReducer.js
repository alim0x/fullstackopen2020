const notificationReducer = (state = { message: '' }, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return {
        ...state,
        message: action.message
      }
    case 'DELETE_NOTIFICATION':
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

let timeoutID;
export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFY',
      message: message
    })
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => dispatch({
      type: 'DELETE_NOTIFICATION',
      message: ''
    }), seconds * 1000)
  }
}

export default notificationReducer