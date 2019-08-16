import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteReminder } from '../actions'

const Reminder = props => {
  const { reminders, deleteReminder } = props

  return (
    <>
      {reminders.map(reminder => {
        return (
          <li className="list-group-item d-flex justify-content-between" key={reminder.id}>
            <div className="list-item">
              <div>{reminder.text}</div>
              <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
            </div>
            <div
              className="list-item delete-button"
              onClick={() => deleteReminder(reminder.id)}
            >
              &#x2715;
              </div>
          </li>
        )
      })}
    </>
  )
}

const mapStateToProps = state => {
  // 由于使用了 combineReducers, store 里面存放的 state 变成一个对象 { remindersReducer: [] }
  return {
    reminders: state.reminders
  }
}

export default connect(mapStateToProps, { deleteReminder })(Reminder);