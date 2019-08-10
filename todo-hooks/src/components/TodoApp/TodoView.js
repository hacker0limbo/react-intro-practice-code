import React from 'react'
import TodoForm from './TodoForm';
import Todos from './Todos'
import RestButton from './RestButton'

const TodoView = () => {
  return (
    <>
      <TodoForm />
      <Todos />
      <RestButton />
    </>
  )
}

export default TodoView