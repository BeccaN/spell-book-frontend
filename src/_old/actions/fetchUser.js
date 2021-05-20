export const fetchUser = (data) => {
  return (dispatch)  => {
    const apiUrl = "http://localhost:8000/api/v1/users/"
    
    fetch (apiUrl + data)
      .then((resp) => resp.json())
      .then((resp) => dispatch({type: 'FETCH_SPELL_BOOKS', payload: resp}))
  }
}