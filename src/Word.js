import React from 'react'
import { connect } from 'react-redux'
import './Word.css'

function Word({ word, progress }) {
  return (
    <span className={`word ${word.length === progress ? 'completed' : ''}`}>
      <strong>{word.substring(0, progress)}</strong>
      {word.substring(progress)}
    </span>
  )
}

const mapStateToProps = (state, { word }) => {
  const progress = state.wordsProgress[word]
  return { progress }
}

export default connect(mapStateToProps)(Word)
