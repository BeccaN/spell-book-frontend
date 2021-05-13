export function fetchSpells() {
  return (dispatch) => {
    const apiUrl = 'http://localhost:8000/api/v1/spells'
    fetch (apiUrl)
      .then((resp) => resp.json())
      .then((data) => dispatch({
        type: 'FETCH_SPELLS',
        payload: data
      }))
  }
}