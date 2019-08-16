import React from 'react'
import { connect } from 'react-redux'
import { addReminder } from './actions'
import Reminders from './components/Reminders'
import ResetButton from './components/ResetButton'
import ReminderInput from './components/ReminderInput'

const App = (props) => {
  return (
    <div className="App">
      <ReminderInput />
      <Reminders />
      <ResetButton />
    </div>
  )
}

// 直接将 mapDispatchToProps 定义为一个对象, redux 内部会自动调用 bindActionCreators 处理
export default connect(null, { addReminder })(App)
