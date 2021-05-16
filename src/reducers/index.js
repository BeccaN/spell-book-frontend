import { combineReducers } from 'redux';
import spells from './spellReducer';
import spell_books from './spellBookReducer'

export default combineReducers({
  spells,
  spell_books
});