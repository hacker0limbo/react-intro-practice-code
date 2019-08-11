import React from 'react'
import { Link } from 'react-router-dom'

const Posts = (props) => {
  const { posts, loading } = props

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div>
      <ul className="list-group mb-4">
        {posts.map(post => (
          <Link
            key={post.id} 
            className="list-group-item list-group-item-action"
            to={'/post/'+post.id}
          >
            {post.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Posts