import React, { Component } from 'react'
import '../styles/RecordPagination.css'

export default class RecordPagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.props.currentPage
    }
  }

  jump(event) {
    // 根据用户点击的, 设置当前页数, 同时更新父组件
    this.setState({
      currentPage: parseInt(event.target.innerText)
    })
    this.props.handleJumpPage(parseInt(event.target.innerText), 10)
  }

  moveForward(event) {
    // 如果不是最后一页, +1, 否则始终维持 currentPage 为最后一页, 即 totalPage
    let next
    if (this.state.currentPage + 1 < this.props.totalPages) {
      next = this.state.currentPage + 1
    } else {
      next = this.props.totalPages
    }
    this.setState({
      currentPage: next
    })
    this.props.handleJumpPage(next, 10)
  }

  moveBackward(event) {
    let prev
    if (this.state.currentPage > 1) {
      prev = this.state.currentPage - 1
    } else {
      prev = 1
    }
    this.setState({
      currentPage: prev
    })
    this.props.handleJumpPage(prev, 10)

  }

  getPages(pagesNum) {
    const pages = []
    for (let i = 0; i < pagesNum; i++) {
      pages.push(
        <li 
          className={`page-item ${(i+1 === this.state.currentPage) ? 'active' : ''}`}
          key={i}
          onClick={this.jump.bind(this)}
        >
          <span className="page-link">
            {i+1}
          </span>
        </li>
      )
    }
    return pages
  }

  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
            <span 
              className="page-link" 
              onClick={this.moveBackward.bind(this)}              
            >
              Previous
            </span>
          </li>
          {this.getPages(this.props.totalPages)}
          <li className={`page-item ${this.state.currentPage === this.props.totalPages ? 'disabled' : ''}`}>
            <span 
              className="page-link"
              onClick={this.moveForward.bind(this)}  
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    )
  }
}
