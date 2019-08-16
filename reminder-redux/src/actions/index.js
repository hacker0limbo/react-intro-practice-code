import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants'

// 一个 dispatch 方法, 返回一个 action, 以及一些触发的数据
export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    text,
    dueDate
  }
}

export const deleteReminder = (reminderID) => {
  return {
    type: DELETE_REMINDER,
    reminderID 
  }
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}