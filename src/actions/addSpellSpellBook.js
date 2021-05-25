export const addSpellSpellBook = (data) => {
  return (dispatch)  => {
    const apiUrl = 'http://localhost:8000/api/v1/spell_spell_books'
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((resp) => resp.json())
      .then((data) => {
          if (data.error){
          dispatch({type: "SPELL_SPELL_BOOK_ERROR", payload: data})
        } else {
          dispatch({type: "ADD_SPELL_SPELL_BOOK", payload: data})
          dispatch({type: "UPDATE_SPELL_BOOK", payload: data})
        }
      })
  }
}