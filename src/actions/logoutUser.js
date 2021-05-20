export const logoutUser = () => {
  return (dispatch)  => {
    dispatch({ type: 'REMOVE_USER'});
    window.location.reload(false);
  }
}