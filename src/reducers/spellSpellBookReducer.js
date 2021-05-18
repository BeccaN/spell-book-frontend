export default function spellSpellBookReducer(state = {spell_spell_books: []}, action) {
  switch(action.type) {
    case 'FETCH_SPELL_SPELL_BOOKS': {
      return {spell_spell_books: action.payload}
    }
    case 'DELETE_SPELL_SPELL_BOOK': {
      
      let filteredState = state.spell_spell_books.filter(join => join.id !== action.data.id)
      return {...state, spell_spell_books: filteredState}
    }
    case 'ADD_SPELL_SPELL_BOOK': {
      return {...state, spell_spell_books: [...state.spell_spell_books, action.payload.spell_spell_book]}
    }
    default:
      return state
  }
}