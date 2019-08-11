import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])
  
  return (
    <Router>
      <Switch>
        <Route 
          path="/" 
          render={props => <Home {...props} posts={posts} loading={loading} />}
          exact 
        />
        <Route 
          path="/post/:id" 
          render={props => <Post {...props} post={posts[props.match.params.id]} loading={loading} />}  
        />
      </Switch>
    </Router>
  )
}

export default App