import React, { useState } from 'react'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue('')
  }
}

const TodoForm = (props) => {
  const {resetValue, ...text} = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(text.value)
    resetValue()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...text} /> 
    </form>
  )
}

export default TodoForm