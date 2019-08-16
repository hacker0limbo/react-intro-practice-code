import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addReminder } from '../actions'

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const resetDefault = () => {
    setValue(initialValue)
  }

  return {
    value, 
    onChange: handleChange,
    resetDefault
  }
}

const ReminderInput = props => {
  // 解构赋值重命名
  const { resetDefault: resetTextDefault , ...text } = useFormInput('')
  const { resetDefault: resetDueDateDefault, ...dueDate } = useFormInput('')

  const addReminder = (text, dueDate) => {
    resetTextDefault()
    resetDueDateDefault()
    props.addReminder(text, dueDate)
  }

  return (
    <>
      <div className="title m-3">Reminder Pro</div>
      <div className="form-inline justify-content-center">
        <div className="form-group mr-2">
          <input
            type="text"
            className="form-control mr-2"
            placeholder="I have to..."
            {...text}
          />
          <input
            type="datetime-local"
            className="form-control"
            {...dueDate}
          />
        </div>
        <button
          className="btn btn-success"
          onClick={() => addReminder(text.value, dueDate.value)}
        >
          Add Reminder
        </button>
      </div>
    </>
  )
}

export default connect(null, { addReminder })(ReminderInput)

