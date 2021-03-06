import { combineReducers } from 'redux';
import spells from './spellReducer';
import spell_books from './spellBookReducer'
import spell_spell_books from './spellSpellBookReducer'
import user from './userReducer'
import error from './errorReducer'

export default combineReducers({
  spells,
  spell_books,
  spell_spell_books,
  user,
  error
});