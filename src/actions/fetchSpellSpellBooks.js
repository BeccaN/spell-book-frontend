export function fetchSpellSpellBooks() {
  return (dispatch) => {
    const apiUrl = 'http://localhost:8000/api/v1/spell_spell_books'
    fetch (apiUrl)
      .then((resp) => resp.json())
      .then((data) => dispatch({type: 'FETCH_SPELL_SPELL_BOOKS', payload: data}))
  }
}