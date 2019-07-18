import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as RecordsAPI from '../utils/RecordsAPI'
import { timestamp } from '../utils/utils'

export default class RecordForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      title: '',
      amount: ''
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    // 使用 es6 的计算属性设置状态
    // 当有多个 input 框需要控制状态的时候, 使用该方法, 其中 [name] 里面的 name 是之前的变量
    this.setState({
      [name]: value
    })
  }

  valid() {
    return this.state.date && this.state.title && this.state.amount
  }

  async handleSubmit(event) {
    // 默认表单提交使用 get 方法发送数据, 使用 preventDefault 可以阻止
    event.preventDefault()
    // 这里很神奇, 不用去获得表单里面用户输入的数据, 这是由于 onChange 方法受控组件之间在表单 value 和 state 之间做了双向绑定
    // 表单里面用户输入的数据就是 state 的值
    const data = {
      ...this.state,
      date: timestamp(this.state.date),
      amount: Number.parseInt(this.state.amount, 10)
    }
    
    try {
      const res = await RecordsAPI.create(data)
      // 发送了数据以后返回的数据传递给父组件, 这里的 handleNewRecord 就是父组件传递给子组件的方法
      this.props.handleNewRecord(res.data)
      // 同时将数据表单里面的数据清空, 也就是将 state 清空
      this.setState({
        date: '',
        title: '',
        amount: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <form className="mb-3" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-row align-items-center">
          <div className="col">
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              placeholder="Date"
              name="date"
              value={this.state.date}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              placeholder="Title"
              name="title"
              value={this.state.title}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              placeholder="Amount"
              name="amount"
              value={this.state.amount}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary" disabled={!this.valid()}>
              Create Record
            </button>
          </div>
        </div>
      </form>
    )
  }
}

// 类型检查
RecordForm.propTypes = {
  handleNewRecord: PropTypes.func
}
