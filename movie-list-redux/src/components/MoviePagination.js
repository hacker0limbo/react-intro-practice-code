import React from 'react'

const MoviePagination = props => {
  const { currentPage, totalPages, setCurrentPage } = props

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {[...Array(totalPages)].map((item, index) => (
          <li 
            key={index} 
            className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} 
            onClick={() => setCurrentPage(index + 1)}
          >
            <a className="page-link" href="#">{index + 1}</a>
          </li>
        ))}
      </ul>
    </nav>

  )
}

export default MoviePagination