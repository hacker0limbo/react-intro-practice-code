import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext)
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => dispatch({ type: 'TOOGLE_COMPLETE', i: index })}
            style={{ textDecoration: todo.complete ? "line-through" : "", cursor: "pointer" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos