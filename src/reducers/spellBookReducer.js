export default function spellBookReducer(state = {spell_books: []}, action) {
  switch(action.type) {
    case 'FETCH_SPELL_BOOKS': {
      return {spell_books: action.payload}
    }
    case 'ADD_SPELL_BOOK': {
      return {...state, spell_books: [...state.spell_books, action.payload]}
    }
    default:
      return state
  }
}