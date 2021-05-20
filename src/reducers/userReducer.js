function userReducer(state = [], action) {
  switch (action.type) {
      case 'ADD_USER':
        return {...state, user: action.payload.user}
      case 'REMOVE_USER':
        return {...state, user: []}
      default:
          return state;
  }
}

export default userReducer;