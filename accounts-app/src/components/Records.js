import React, { Component } from 'react'
import Record from './Record'
import RecordForm from './RecordForm'
import * as RecordsAPI from '../utils/RecordsAPI'
import AmountBox from './AmountBox'
import DailyAmount from './DailyAmount'
import Loading from './Loading'

export default class Records extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      // 数据是否被加载, 不管是否发生错误
      isLoaded: false,
      records: []
    }
  }

  async componentDidMount() {
    // 生命周期, 当组件挂载以后可以初始化数据
    try {
      const res = await RecordsAPI.getAll()
      this.setState({
        records: res.data,
        isLoaded: true
      })  
    } catch (error) {
      this.setState({
        isLoaded: true,
        error: error
      })
    }
  }

  addRecord(newRecord) {
    this.setState({
      error: null,
      isLoaded: true,
      // 使用扩展运算符拷贝前面的所有对象, 然后加入之前的新的对象
      records: [...this.state.records, newRecord]
    })
  }

  updateRecord(preRecord, updatedRecord) {
    // 传过来的是之前的 record 和更新以后的 record  需要用更新的 record 覆盖掉之前的 record
    const recordIndex = this.state.records.indexOf(preRecord)
    const updatedRecords = this.state.records.map((record, index) => {
      if (index !== recordIndex) {
        // 如果找不到, 那么就返回保持不变
        return record
      }
      // 否则更新, 使用扩展运算符更新, 表示将原始 records 里面的那条 record 用最新的 record 更新掉
      return {
        ...record,
        ...updatedRecord
      }
    })
    this.setState({
      records: updatedRecords,
    })
  }

  deleteRecord(deletedRecord) {
    const recordIndex = this.state.records.indexOf(deletedRecord)
    const newRecords = this.state.records.filter((item, index) => index !== recordIndex)
    this.setState({
      records: newRecords
    })
  }

  getCredits() {
    let credits = this.state.records.filter(record => {
      return record.amount >= 0
    })

    return credits.reduce((prev, curr) => {
      return prev + Number.parseInt(curr.amount, 10)
    }, 0)
  }

  getDebits() {
    let credits = this.state.records.filter(record => {
      return record.amount < 0
    })

    return credits.reduce((prev, curr) => {
      return prev + Number.parseInt(curr.amount, 10)
    }, 0)
  }

  getBalance() {
    return this.getCredits() + this.getDebits()
  }

  render() {
    const { error, isLoaded, records } = this.state
    let recordsComponent

    if (error) {
      recordsComponent = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      recordsComponent = <div><Loading color="primary" /></div>
    } else {
      recordsComponent = (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* 当组件的子元素是一系列类型相同元素时，就必须添加一个唯一的属性key */}
              {records.map(record => (
                <Record 
                  key={record.id} 
                  record={record} 
                  handleEditRecord={this.updateRecord.bind(this)} 
                  handleDeleteRecord={this.deleteRecord.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return (
      <div>
        <h2>Records</h2>
        <div className="row mb-3">
          {/* 子组件传递数据更新父组件的 state 之后, 会触发父组件的 render() 方法的重新调用, 因此直接在这里传递 props 实时更新 */}
          <AmountBox text="Credit" type="success" amount={this.getCredits()} />
          <AmountBox text="Debit" type="danger" amount={this.getDebits()} />
          <AmountBox text="Balance" type="info" amount={this.getBalance()} />
        </div>
        <RecordForm handleNewRecord={this.addRecord.bind(this)} />
        <DailyAmount records={records} />
        {recordsComponent}
      </div>
    )
  }
}
