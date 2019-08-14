import React from 'react'

const Message = (props) => {
  const { message } = props

  return (
    <div className={`alert alert-${message.color} alert-dismissible fade show`} role="alert">
      {message.msg}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

  )
}

export default Message