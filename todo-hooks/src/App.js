import React, {useState} from 'react'
import TodoForm from './components/TodoFrom'

const App = () => {
  const [todos, setTodos] = useState([])

  const toggleComplete = i => {
    const newTodos = todos.map((todo, k) => {
      if (k === i) {
        // 用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉        
        return {
          ...todo,
          complete: !todo.complete,
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  const clearTodos = () => {
    setTodos([])
  }

  return (
    <div>
      <TodoForm onSubmit={text => setTodos([{ text, complete: false }, ...todos])} />
      <ul>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            onClick={() => toggleComplete(index)}
            style={{textDecoration: todo.complete ? "line-through" : "", cursor: "pointer"}}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={clearTodos}>reset</button>
    </div>
  )
}

export default App