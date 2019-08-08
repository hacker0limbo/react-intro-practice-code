import React, { useState, useEffect, Component } from 'react'

const myAPI = {
  count: 0,
  subscribe(callback) {
    this.intervalID = setInterval(() => {
      this.count += 1
      callback(this.count)
    }, 1000)
  },
  unsubscribe() {
    clearInterval(this.intervalID)
    this.reset()
  },
  reset() {
    this.count = 0
  }
}

const CounterExample = (props) => {
  const { counterState } = props
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // mount 或更新时, 回调函数中设置定时器
    myAPI.subscribe(counter => {
      setCounter(counter)
    })

    // unmount 触发, 调用 unsubscribe, 清空计时器的同时, 将 state 清零
    return () => {
      myAPI.unsubscribe()
      setCounter(0)
    }
  }, [counterState])

  return (
    <div>
      Timer: {counter}
    </div>
  )
}

export default class UnmountDemo extends Component {
  state = {
    counterState: 'didMount'
  }

  handleClick = () => {
    const { counterState } = this.state
    this.setState({
      counterState: counterState === 'didMount' ? 'willUnmount' : 'didMount'
    })
  }

  render() {
    const { counterState } = this.state

    return (
      <div>
        <h4>Current State: {counterState}</h4>
        <button onClick={this.handleClick}>
          {counterState === 'didMount' ? 'unmount it' : 'mount it'}
        </button>
        <br />
        {counterState === 'didMount' ? <CounterExample counterState={counterState} /> : <div>Timer is unmounted</div>}
      </div>
    )
  }
}