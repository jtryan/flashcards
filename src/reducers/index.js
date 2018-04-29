import {
    GET_DECKS,
    GET_DECK,
    CREATE_DECK,
    ADD_CARD_TO_DECK
} from '../actions/action_types'

function decks (state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case GET_DECK:
      return {
        ...state,
        ...action.deck
      }
      case CREATE_DECK:
      return {
        ...state,
        ...action.title
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
  
export default decks