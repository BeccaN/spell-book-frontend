export default function spellBookReducer(state = {spell_books: []}, action) {
  switch(action.type) {
    case 'FETCH_SPELL_BOOKS': {
      return {...state, spell_books: action.payload};
    }
    case 'ADD_SPELL_BOOK': {
      return {...state, spell_books: [...state.spell_books, action.payload]};
    }
    // case 'UPDATE_SPELL_BOOK_SPELLS': {
    //   let spellBook = state.spell_books.find(book => book.id === action.data.spell_book_id)
    //   let filteredSpells = spellBook.spells.filter(spell => spell.id !== action.data.spell_id)
    //   let filteredState = state.spell_books.filter(book => book.id !== action.data.spell_book_id)

    //   spellBook.spells = filteredSpells
      
    //   return {...state, spell_books: [...filteredState, spellBook]};
    // }
    case 'UPDATE_SPELL_BOOK': {      
      let filteredState = state.spell_books.filter(book => book.id !== action.payload[1].id)
      return {...state, spell_books: [...filteredState, action.payload[1]]};
    }
    // case 'DELETE_SPELL_BOOK': {
    //   let filteredState = state.spell_books.filter(book => book.id !== parseInt(action.data))
      
    //   return {...state, spell_books: filteredState};
    // }
    default:
      return state
  }
}