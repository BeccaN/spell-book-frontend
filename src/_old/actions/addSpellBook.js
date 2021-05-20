export const addSpellBook = (data) => {
  return (dispatch)  => {
    const apiUrl = 'http://localhost:8000/api/v1/spell_books'
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((resp) => resp.json())
      .then((data) => dispatch({type: "ADD_SPELL_BOOK", payload: data}))
  }
}