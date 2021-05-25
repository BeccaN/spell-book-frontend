function errorReducer(state = [], action) {
  switch (action.type) {
      case 'ADD_ERROR_LOGIN':
        return {...state, error_login: action.payload.error};
      case 'ADD_ERROR_SIGNUP':
        return {...state, error_signup: action.payload.error};
      default:
          return state;
  }
}

export default errorReducer;