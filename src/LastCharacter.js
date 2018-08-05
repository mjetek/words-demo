import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import './LastCharacter.css'

function LastCharacter({ lastCharacter, lastCharacterTime }) {
  return (
    lastCharacter && (
      <Transition
        keys={[lastCharacterTime]}
        from={{ opacity: 0, transform: `translate(0, -300px)` }}
        enter={{ opacity: 1, transform: `translate(0, 0)` }}
        leave={{
          opacity: 0,
          transform: `translate(0, 300px)`,
          pointerEvents: 'none'
        }}
      >
        {[
          styles => (
            <div style={styles} className="last-character">
              {lastCharacter}
            </div>
          )
        ]}
      </Transition>
    )
  )
}

export default connect(state => ({
  lastCharacter: state.lastCharacter,
  lastCharacterTime: state.lastCharacterTime
}))(LastCharacter)
