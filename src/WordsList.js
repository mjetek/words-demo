import React from 'react'
import { connect } from 'react-redux'
import Word from './Word'

function WordsList({ words, ...props }) {
  return (
    <div {...props}>
      {words.map((word, i) => <Word key={`${word}-${i}`} word={word} />)}
    </div>
  )
}

export default connect(
  state => ({
    words: state.words
  }),
  {}
)(WordsList)
