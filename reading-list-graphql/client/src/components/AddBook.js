import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries'

const AddBook = props => {
  const { loading, error, data } = useQuery(getAuthorsQuery)
  const [addBook, { mutationData }] = useMutation(addBookMutation)
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('Select Author')

  const handleSubmit = e => {
    e.preventDefault()
    addBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
  }

  if (loading) {
    return 'Loading...'
  }

  if (error) {
    return `Error! ${error.message}`
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <label>Book Name:</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Genre Name:</label>
          <input 
            type="text" 
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <label>Author Name:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>{authorId}</option>
            {data.authors.map(author => (
              <option 
                key={author.id} 
                value={author.id}
              >
                {author.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook