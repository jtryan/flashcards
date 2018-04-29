import {
    GET_DECKS,
    GET_DECK,
    SAVE_FILE_DECK,
    ADD_CARD_TO_DECK
} from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.entries,
      }
    case GET_DECK:
      return {
        ...state,
        ...action.entry
      }
      case SAVE_FILE_DECK:
      return {
        ...state,
        ...action.entry
      }
      case ADD_CARD_TO_DECK:
      return {
        ...state,
        ...action.entry
      }
    default:
      return state
  }
}
  
export default entries