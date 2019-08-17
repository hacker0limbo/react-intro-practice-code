import React, { useState } from 'react'

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}

const GameForm = props => {
  const title = useFormInput('')
  const cover = useFormInput('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <h1>Add New Game</h1>

        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            {...title}
          />
        </div>
        <div className="field">
          <label htmlFor="title">Cover Url</label>
          <input
            type="text"
            name="cover"
            {...cover}
          />
        </div>

        <div className="field">
          {
            cover.value !== '' && <img src={cover.value} alt="cover" className="ui small bordered image" />
          }
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    </div>
  )
}

export default GameForm