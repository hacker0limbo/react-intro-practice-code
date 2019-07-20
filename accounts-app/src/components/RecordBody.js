import React, { Component } from 'react'
import Loading from './Loading'
import Record from './Record'
import RecordPagination from './RecordPagination'

export default class RecordBody extends Component {
  constructor(props) {
    super(props)
    this.recordsToDisplay = 3
    this.state = {
      // 当前的 pagination 的页面
      currentPage: 1,
    }
  }

  getTotalPages() {
    return Math.ceil(this.props.records.length / this.recordsToDisplay)
  }

  getDisplayedRecords() {
    return this.props.records.slice(
      this.recordsToDisplay * this.state.currentPage - this.recordsToDisplay,
      this.recordsToDisplay * this.state.currentPage
    )
  }

  jumpPage(newPage) {
    this.setState({
      currentPage: newPage,
    })
  }

  render() {
    const displayedRecords = this.getDisplayedRecords()
    if (this.props.error) {
      return <div>Error: {this.props.error.message}</div>
    } else if (!this.props.isLoaded) {
      return (
        <div>
          <Loading color="primary" />
        </div>
      )
    } else {
      return (
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
              {displayedRecords.map(record => (
                <Record
                  key={record.id}
                  record={record}
                  // 多级组件之间的传递, 直接将父组件的 props 原封不动传递给子组件, 但是注意, 要在父组件上绑定 this 保证可以触发事件
                  handleEditRecord={this.props.handleEditRecord}
                  handleDeleteRecord={this.props.handleDeleteRecord}
                />
              ))}
            </tbody>
          </table>
          <RecordPagination 
            totalPages={this.getTotalPages()}
            currentPage={this.state.currentPage}
            handleJumpPage={this.jumpPage.bind(this)}
          />
        </div>
      )
    }
  }
}
