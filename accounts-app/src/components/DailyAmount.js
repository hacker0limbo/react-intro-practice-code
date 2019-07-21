import React, { Component } from 'react'
import { formattedTime } from "../utils/utils"

export default class DailyAmoount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  uniqueDates(records) {
    if (records.length === 0) {
      return []
    }
    // 根据 records 返回所有的不重复的日期
    return [...new Set(records.map(record => formattedTime(record.date)))]
  }

  getDailyAmounts(date, records) {
    let amounts = 0
    for (const record of records) {
      if (formattedTime(record.date) === date) {
        amounts += record.amount
      }
    }
    return amounts
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      amounts: this.getDailyAmounts(event.target.value, this.props.records)
    })
  }

  render() {
    // 每次根据返回的父组件的更新的数据流重新生成一些数据
    let dates = this.uniqueDates(this.props.records)
    let amounts = this.getDailyAmounts(this.state.value, this.props.records)

    if (this.props.records.length === 0) {
      return <div></div>
    }
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text bg-info text-white" >Daily Expenses</span>
        </div>
        <select value={this.state.value} onChange={this.handleChange.bind(this)} className="custom-select">
          <option>choose a date...</option>
          {dates.map(date => (
            <option
              value={date}
              key={date}
            >
              {date}
            </option>
          ))}
        </select>
        <div className="input-group-append">
          <span className="input-group-text bg-warning text-dark">$</span>
          <span 
            className={`input-group-text bg-${amounts >= 0 ? 'success' : 'danger'} text-white`}
          >
            {amounts}
          </span>
        </div>
      </div>
    )
  }
}