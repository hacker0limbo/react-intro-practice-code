import React from 'react'

const Pagination = (props) => {
  const { postsPerpage, totalPosts, paginate, currentPage } = props
  const pageNumbers = []

  for (let i = 1; i < Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i)
  }

  const isCuttentPage = (number) => {
    if (number === currentPage) {
      return 'page-item active'
    }
    return 'page-item'
  }

  const nextPage = () => {
    if (currentPage >= pageNumbers.length) {
      return
    }
    return paginate(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage <= 1) {
      return
    }
    return paginate(currentPage - 1)
  }

  const isFirstPage = (pageNumber) => {
    if (pageNumber === 1) {
      return 'page-item disabled'
    }
    return 'page-item'
  }

  const isLastPage = (pageNumber) => {
    if (pageNumber === pageNumbers.length) {
      return 'page-item disabled'
    }
    return 'page-item'
  }

  return (
    <nav>
      <ul className="pagination" style={{cursor: 'pointer'}}>
        <li className={isFirstPage(currentPage)}>
          <span className="page-link" onClick={prevPage}>Previous</span>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={isCuttentPage(number)}>
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
        <li className={isLastPage(currentPage)}>
          <span className="page-link" onClick={nextPage}>Next</span>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination