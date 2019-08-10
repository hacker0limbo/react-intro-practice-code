import React, { useState, useContext } from 'react'
import { TodoContext } from './TodoContext'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue('')
  }
}

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext)
  const { resetValue, ...text } = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // 调用父组件方法, 传递新的 todo 的内容
    dispatch({
      'type': 'ADD_TODO',
      text: text.value
    })
    resetValue()
  }

  return (
    // 正常情况下只有触发了 onChange 或 onSubmit 事件才会重新 render
    // 由于父组件可能会被重新渲染, 导致子组件也被牵连的进行不必要的渲染
    <form onSubmit={handleSubmit}>
      <input type="text" {...text} /> 
    </form>
  )
}

export default React.memo(TodoForm)