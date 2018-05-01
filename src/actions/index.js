import {
  GET_DECK,
  GET_DECKS,
  CREATE_DECK,
  ADD_CARD_TO_DECK
} from './action_types'


export const getDecks = decks => ({
  type: GET_DECKS,
  decks,
})

export const getDeck = deck => ({
  type: GET_DECK,
  deck,
})

export const createDeck = deck => ({
  type: CREATE_DECK,
  deck,
})

export const addCardToDeck = params => ({
  type: ADD_CARD_TO_DECK,
  params,
})