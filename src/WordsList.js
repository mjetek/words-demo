import React from 'react'
import { connect } from 'react-redux'
import Word from './Word'
import './WordsList.css'

function WordsList({ words, ...props }) {
  return (
    <div {...props} className="words-list">
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
