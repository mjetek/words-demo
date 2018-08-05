import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import store from './store'
import './index.css'
import { Transition } from 'react-spring'
import LastCharacter from './LastCharacter'
import TypeWordsForm from './TypeWordsForm'
import WordsList from './WordsList'

class App extends Component {
  render() {
    const { playing, restart } = this.props

    return (
      <div ref={this.app} className="content">
        <Transition
          from={{ opacity: 0, transform: 'scale(0)' }}
          enter={{ opacity: 1, transform: 'scale(1)' }}
          leave={{
            opacity: 0,
            transform: 'scale(0)',
            pointerEvents: 'none',
            display: 'none'
          }}
        >
          {playing
            ? style => <WordsList style={style} />
            : style => <TypeWordsForm style={style} />}
        </Transition>
        {playing && (
          <React.Fragment>
            <div className="center mt-4">
              <button onClick={restart}>Restart</button>
            </div>
            <LastCharacter />
          </React.Fragment>
        )}
      </div>
    )
  }
}

const restart = () => ({ type: 'RESTART' })

const ConnectedApp = connect(
  state => ({
    playing: state.playing
  }),
  { restart }
)(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
