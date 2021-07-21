export const fetchSpellBooks = (token) => {
  return (dispatch)  => {
    if (token) {
      
      const apiUrl = "http://localhost:8000/api/v1/spell_books"
      
      fetch (apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((resp) => resp.json())
        .then((resp) => {
          dispatch({type: 'FETCH_SPELL_BOOKS', payload: resp});
        })
    }
  }
}