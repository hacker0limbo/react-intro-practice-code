import React, { Component } from 'react'
import { formattedTime } from "../utils/utils"

export default class DailyAmoount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      dates: this.uniqueDates(this.props.records),
      amounts: this.getDailyAmounts(this.value, this.props.records)
    }
  }

  uniqueDates(records) {
    if (records.length === 0) {
      return []
    }
    // 根据 records 返回所有的不重复的日期
    return [...new Set(records.map(record => formattedTime(record.date)))]
  }

  componentWillReceiveProps(newProps) {
    // 生命周期, 当接受新的 props 时触发
    this.setState({
      dates: this.uniqueDates(newProps.records),
      amounts: this.getDailyAmounts(this.state.value, newProps.records)
    })
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
          {this.state.dates.map(date => (
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
            className={`input-group-text bg-${this.state.amounts >= 0 ? 'success' : 'danger'} text-white`}
          >
            {this.state.amounts}
          </span>
        </div>
      </div>
    )
  }
}