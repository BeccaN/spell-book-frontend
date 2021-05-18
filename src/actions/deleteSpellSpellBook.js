export const deleteSpellSpellBook = (data) => {
  return (dispatch)  => {
    const apiUrl = `http://localhost:8000/api/v1/spell_spell_books/${data.id}`
    
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'DELETE'
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        dispatch({type: "DELETE_SPELL_SPELL_BOOK", data})
        dispatch({type: "UPDATE_SPELL_BOOK_SPELLS", data})
      })
  }
}