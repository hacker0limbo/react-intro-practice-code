import React, { useReducer } from 'react'
import TodoView from './TodoView';
import { TodoContext } from './TodoContext'

const todosReducer = (todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ text: action.text, complete: false }, ...todos]
    case 'TOOGLE_COMPLETE':
      const newTodos = todos.map((todo, k) => {
        if (k === action.i) {
          // 用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉        
          return {
            ...todo,
            complete: !todo.complete,
          }
        } else {
          return todo
        }
      })
      return newTodos
    case 'RESET':
      return []
    default:
      return todos
  }
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todosReducer, [])

  return (
    // 将 todos, dispatch 以对象形式传递给 context, 传给子组件
    <TodoContext.Provider value={{todos, dispatch}}>
      <TodoView />
    </TodoContext.Provider>
  )
}

export default TodoApp
