import { combineReducers } from 'redux'

function words(state = [], action) {
  switch (action.type) {
    case 'SET_WORDS': {
      return action.words
    }
    default:
      return state
  }
}

function wordsProgress(state = {}, action) {
  switch (action.type) {
    case 'SET_WORDS': {
      const { words } = action
      return words.reduce((acc, word) => ({ ...acc, [word]: 0 }), {})
    }
    case 'WORD_PROGRESS': {
      const { word, progress } = action
      return {
        ...state,
        [word]: progress
      }
    }
    default:
      return state
  }
}

function playing(state = false, action) {
  switch (action.type) {
    case 'SET_WORDS':
      return true
    case 'WORDS_FINISHED':
    case 'RESTART':
      return false
    default:
      return state
  }
}

function lastCharacter(state = '', action) {
  switch (action.type) {
    case 'CHAR_TYPED':
      return action.character
    default:
      return state
  }
}

function lastCharacterTime(state = 0, action) {
  switch (action.type) {
    case 'CHAR_TYPED':
      return Date.now()
    default:
      return state
  }
}

export default combineReducers({
  words,
  wordsProgress,
  playing,
  lastCharacter,
  lastCharacterTime
})
