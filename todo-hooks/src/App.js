import React from 'react'
import TodoApp from './components/TodoApp/'
import EmojiGenerator from './components/EmojiGenerator'
import TokenApp from './components/TokenApp'
import Counter from './components/Counter'
import GithubList from './components/GithubList'
import UnmountDemo from './components/UnmountDemo'
import SearchBox from './components/SearchBox'

const App = () => {
  return (
    <div>
      <h3>Todo</h3>
      <TodoApp />
      <hr />

      <h3>Search Box</h3>
      <SearchBox />
      <hr />

      <h3>Emoji Generator</h3>
      <EmojiGenerator />
      <hr />

      <h3>My Token</h3>
      <TokenApp />
      <hr />

      <h3>Counter & fetch data</h3>
      <Counter />
      <hr />

      <h3>Unmount & Mount Example</h3>
      <UnmountDemo />
      <hr />

      <h3>Github List</h3>
      <GithubList />
      <hr />

    </div>
  )
}

export default App