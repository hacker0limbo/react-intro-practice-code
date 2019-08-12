import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  const { post, loading } = props

  if (loading) {
    return (
      <div classNmae="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Article {post !== undefined ? post.id : ''}</h2>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{post !== undefined ? post.title : ''}</h5>
          <p className="card-text">{post !== undefined ? post.body : ''}</p>
          <Link className="btn btn-primary" to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Post