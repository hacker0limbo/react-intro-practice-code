import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBookQuery } from '../queries'

const BookDetails = props => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: props.bookId
    }
  })

  if (loading) {
    return (
      <div className="book-details">
        <h2>Loading...</h2>
      </div>
    )
  }

  if (error) {
    return `Error! ${error.message}`
  }

  if (!data.book) {
    return (
      <div className="book-details">
        <h2>No Book Selected</h2>
      </div>
    )
  }

  return (
    <div className="book-details">
      <h2>{data.book.name}</h2>
      <p>
        {data.book.genre}
      </p>
      <p>
        {data.book.author.name}&nbsp;
        age: {data.book.author.age}
      </p>
      <p>All books by this author:</p>
      <ul className="other-books">
        {data.book.author.books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default BookDetails