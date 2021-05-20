export const fetchSpellBooks = (data) => {
  return (dispatch)  => {
    const apiUrl = "http://localhost:8000/api/v1/spell_books"
    
    fetch (apiUrl)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({type: 'FETCH_SPELL_BOOKS', payload: resp});
      })
  }
}