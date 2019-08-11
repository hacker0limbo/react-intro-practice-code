import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  const { post, loading } = props

  let body = ''
  let title = ''
  if (post !== undefined) {
    body = post.body
    title = post.title
  }

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Article</h2>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <Link className="btn btn-primary" to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Post