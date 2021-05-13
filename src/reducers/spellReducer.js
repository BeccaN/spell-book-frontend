export default function spellReducer(state = {spells: []}, action) {
  switch(action.type) {
    case 'FETCH_SPELLS': {
      return {spells: action.payload}
    }
    default:
      return state
  }
}
