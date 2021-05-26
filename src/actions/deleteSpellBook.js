export const deleteSpellBook = (data, history) => {
  return (dispatch)  => {
    const apiUrl = `http://localhost:8000/api/v1/spell_books/${data}`
    
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'DELETE'
    })
      .then((resp) => resp.json())
      .then((resp) => {
      dispatch({type: "DELETE_SPELL_BOOK", data});
      history.push('/spellbooks')
      })
  }
}