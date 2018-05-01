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
        ...action.deck
      }
    case ADD_CARD_TO_DECK:
      const {title, questions, question, answer} = action.params;
      const newQuestions = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);

      return {
        ...state,
        [title]: {...state[title], questions: newQuestions},
      }
    default:
      return state
  }
}
  
export default decks