import React from 'react'

const Loading = (props) => {
  return (
    <div className={`spinner-border text-${props.color}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loading
