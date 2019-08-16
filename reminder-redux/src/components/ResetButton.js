import React from 'react'
import { connect } from 'react-redux'
import { clearReminders } from '../actions'

const RestButton = props => {
  const { reminders, clearReminders } = props

  if (reminders.length === 0) {
    return (null)
  }

  return (
    <div className="text-center">
      <button 
        className="btn btn-danger mt-3"
        onClick={clearReminders}
      >
        Reset
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reminders: state.reminders
  }
}

// 连接到 store
export default connect(mapStateToProps, { clearReminders })(RestButton);