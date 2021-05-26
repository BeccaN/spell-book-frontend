export const loginUser = (userObj, history) => {
  return (dispatch)  => {
    const apiUrl = 'http://localhost:8000/api/v1/login'
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({user: userObj})
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          localStorage.setItem("token", data.jwt);
          dispatch({ type: 'ADD_USER', payload: data });
          history.push('/');
        } else {
          dispatch({type: 'ADD_ERROR_LOGIN', payload: data});
        }
      })
  }
}