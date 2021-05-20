export function fetchSpellBooks() {
  return (dispatch) => {
    const apiUrl = 'http://localhost:8000/api/v1/spell_books'
    fetch (apiUrl)
      .then((resp) => resp.json())
      .then((data) => dispatch({
        type: 'FETCH_SPELL_BOOKS',
        payload: data
      }))
  }
}