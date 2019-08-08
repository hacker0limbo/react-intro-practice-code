import React, { Component } from 'react'

export default class TokenForm extends Component {
  constructor(props) {
    super(props)
    this.tokenInput = null

    // 使用 ref, 传入一个函数, 参数为当前元素
    this.setTokenInputRef = tokenInputElm => {
      this.tokenInput = tokenInputElm
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const token = this.tokenInput.value
    if (token) {
      this.props.setToken(token)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="token"
          placeholder="Enter your Github token"
          ref={this.setTokenInputRef}
        />
      </form>
    )
  }
}

