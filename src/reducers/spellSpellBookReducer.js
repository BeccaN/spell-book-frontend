export default function spellSpellBookReducer(state = {spell_spell_books: [], error: ""}, action) {
  switch(action.type) {
    case 'FETCH_SPELL_SPELL_BOOKS': {
      return {...state, spell_spell_books: action.payload}
    }
    case 'DELETE_SPELL_SPELL_BOOK': {
      let filteredState = state.spell_spell_books.filter(join => join.id !== action.data.id)
      return {...state, spell_spell_books: filteredState}
    }
    case 'SPELL_SPELL_BOOK_ERROR': {
      return {...state, error: action.payload.error}
    }
    default:
      return state
  }
}