import { combineReducers } from 'redux'
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies'

// action 里面会附带一些数据, 当触发该 action 以后更新的数据会存放在 action 里
const newReminder = (action) => {
  return {
    text: action.text,
    dueDate: action.dueDate,
    id: Math.random()
  }
}

// 注意这里的 state 只针对的是 reminders, 形式只是 state = [], 而非一个对象形式, state = {reminders: []}
// 真正对象形式是用 combineReducers 组合出来
// 初始 state 从 cookies 中读取出来, 否则是一个 []
const remindersReducer = (state=read_cookie('reminders') || [], action={}) => {
  let reminders = null
  switch (action.type) {
    case ADD_REMINDER:
      reminders =  [
        ...state,
        newReminder(action)
      ]
      bake_cookie('reminders', reminders)
      return reminders
    case DELETE_REMINDER:
      reminders = state.filter(reminder => reminder.id !== action.reminderID)
      bake_cookie('reminders', reminders)
      return reminders
    case CLEAR_REMINDERS:
      reminders = []
      bake_cookie('reminders', reminders)
      return reminders
    default:
      return state
  }
}

export default combineReducers({ reminders: remindersReducer })