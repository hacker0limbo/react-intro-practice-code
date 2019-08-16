import React from 'react'
import Reminder from './Reminder'

const Reminders = props => {

  return (
    <div className="list-group list-group-horizontal justify-content-center">
      <ul className="list-group col-sm-8 mt-2">
        <Reminder />
      </ul>
    </div>
  )
}

export default Reminders