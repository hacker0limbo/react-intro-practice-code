import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formattedTime, timestamp } from '../utils/utils'
import * as RecordsAPI from '../utils/RecordsAPI'

export default class Record extends Component {
  constructor(props) {
    super(props)
    // 创建 ref
    this.dateInput = React.createRef()
    this.titleInput = React.createRef()
    this.amountInput = React.createRef()
    this.state = {
      edit: false
    }
  }

  handleToggle() {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleEdit(event) {
    event.preventDefault()
    const updatedRecord = {
      // 发送要保证是原始数据, 因此拿到表单数据以后还需要处理
      date: timestamp(this.dateInput.current.value),
      title: this.titleInput.current.value,
      amount: Number.parseInt(this.amountInput.current.value)
    }
    RecordsAPI.update(this.props.record.id, updatedRecord)
      .then(res => {
        // 需要将 form 自己隐藏, 也就是需要改变 edit state
        this.setState({
          edit: false,
        })
        // 更新数据, 需在 records 这个数组中找到 record(也就是服务器返回的 res.data) 的位置, 然后替换掉
        // 也需要返回之前的 record, 即为 props 传进来的 record, 是只读属性, 因此没有修改
        this.props.handleEditRecord(this.props.record, res.data)
      })
      .catch(error => console.log(error))
  }

  handleDelete() {
    RecordsAPI.remove(this.props.record.id)
      // 注意这里返回的是 this.props.record, 而不是服务器返回的数据, 要保证数据一样
      .then(res => this.props.handleDeleteRecord(this.props.record))
      .catch(error => console.log(error))
  }

  recordRow() {
    // 不可编辑情况下的样式
    return (
      <tr>
        <td>{formattedTime(this.props.record.date)}</td>
        <td>{this.props.record.title}</td>
        <td>${this.props.record.amount}</td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleToggle.bind(this)}>
            Edit
          </button>
          <button className="btn btn-danger mr-1" onClick={this.handleDelete.bind(this)}>
            Delete
          </button>
        </td>
      </tr>
    )
  }

  recordForm() {
    // 可编辑情况下的样式
    return (
      <tr>
        <td>
          {/* 直接使用非受控组件, 因此是 defaultValue, 同时需要创建 ref 来获取 input 的值 */}
          <input
            type="text"
            className="form-control"
            defaultValue={formattedTime(this.props.record.date)}
            ref={this.dateInput}
          />
        </td>
        <td>
          <input 
            type="text" 
            className="form-control" 
            defaultValue={this.props.record.title} 
            ref={this.titleInput} 
          />
        </td>
        <td>
          <input 
            type="text" 
            className="form-control" 
            defaultValue={this.props.record.amount} 
            ref={this.amountInput} 
          />
        </td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleEdit.bind(this)}>
            Update
          </button>
          <button className="btn btn-danger mr-1" onClick={this.handleToggle.bind(this)}>
            Cancel
          </button>
        </td>
      </tr>
    )
  }

  render() {
    if (this.state.edit) {
      return this.recordForm()
    } else {
      return this.recordRow()
    }
  }
}


// 类型检查
Record.propTypes = {
  handleEditRecord: PropTypes.func,
  handleDeleteRecord: PropTypes.func,
  record: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.number,
    title: PropTypes.string,
    amount: PropTypes.number  
  })
}
