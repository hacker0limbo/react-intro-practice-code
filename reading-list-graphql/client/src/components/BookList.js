import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBooksQuery } from '../queries'
import BookDetails from './BookDetail'

const BookList = props => {
  const { loading, error, data } = useQuery(getBooksQuery)
  const [selectedBookId, setSelectedBookId] = useState(null)

  if (loading) {
    return 'Loading...'
  }

  if (error) {
    return `Error! ${error.message}`
  }

  return (
    <div>
      <ul className="book-list">
        {data.books.map(book => (
          <li 
            key={book.id}
            onClick={(e) => setSelectedBookId(book.id)}
          >
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedBookId} />
    </div>
  )
}

export default BookList