import React, { Component } from 'react'
import { TodoContext } from './TodoContext'

class RestButton extends Component {
  static contextType = TodoContext

  render() {
    const { dispatch } = this.context
    return (
      <div>
        <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
      </div>
    )  
  }
}

export default RestButton