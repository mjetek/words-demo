import React, { Component } from 'react'
import { connect } from 'react-redux'

class TypeWordsForm extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const text = event.target.text.value
    const words = text.split(/\s/)
    this.props.setWords(words)
  }

  render() {
    const { setWords, ...props } = this.props
    return (
      <form {...props} className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Type your words"
          autoFocus
          autoComplete="off"
        />
      </form>
    )
  }
}

const setWords = words => ({ type: 'SET_WORDS', words })

export default connect(
  null,
  { setWords }
)(TypeWordsForm)
