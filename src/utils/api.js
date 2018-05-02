import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'decks:mobile-flashcards';

let data = {
  React: {
      title: 'React',
      questions: [
          {
              question: 'What is React?',
              answer: 'A library for managing user interfaces',
          },
          {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event',
          }
      ]
  },
  JavaScript: {
      title: 'JavaScript',
      questions: [
          {
              question: 'What is a closure?',
              answer:
                  'The combination of a function and the lexical environment within which that function was declared.',
          }
      ]
  }
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results === null ? initialData() : JSON.parse(results)
  })
}

export function fetchDeck(title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, title)
  .then(results =>{
    return results === null ? console.log(`ERROR: ${title} not found!`) : JSON.parse(results)
})

}

export function saveDeckTitle(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function addCard({card, deckTitle}) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    let decks = JSON.parse(result)

    let questions = JSON.parse(JSON.stringify(decks[deckTitle].questions))
    questions[questions.length] = card

    let value = JSON.stringify({
      [deckTitle]: {title: deckTitle, questions: questions}
    })

    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value)
  })
}

export function initialData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  return data;
}
