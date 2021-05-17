export default function spellBookReducer(state = {spell_books: []}, action) {
  switch(action.type) {
    case 'FETCH_SPELL_BOOKS': {
      return {spell_books: action.payload}
    }
    case 'ADD_SPELL_BOOK': {
      return {...state, spell_books: [...state.spell_books, action.payload]}
    }
    case 'UPDATE_SPELL_BOOK': {
      let filteredState = state.spell_books.filter(book => book.id !== action.payload.id)
      return {...state, spell_books: [...filteredState, action.payload]}
    }
    case 'DELETE_SPELL_BOOK': {
      
    }
    default:
      return state
  }
}