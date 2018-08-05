import { take, put, all, call, cancel, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export default function* rootSaga() {
  while (true) {
    const wordsTask = yield fork(wordsSaga)
    const action = yield take(['WORDS_FINISHED', 'RESTART'])
    if (action.type === 'RESTART') {
      yield cancel(wordsTask)
    }
  }
}

function* wordsSaga() {
  const { words } = yield take('SET_WORDS')

  yield all(words.map(word => call(listenForWord, word)))

  yield call(delay, 200)
  yield put({ type: 'WORDS_FINISHED' })
}

function* listenForWord(word) {
  let match = ''
  while (true) {
    const { character } = yield take('CHAR_TYPED')

    if (character.startsWith('Esc')) {
      yield take(a => a.type === 'CHAR_TYPED' && a.character.startsWith('Esc'))
      continue
    }

    const matchCandidate = match + character

    match = word.startsWith(matchCandidate) ? matchCandidate : ''

    yield put({
      type: 'WORD_PROGRESS',
      word,
      progress: match.length
    })

    if (word === matchCandidate) {
      return
    }
  }
}
