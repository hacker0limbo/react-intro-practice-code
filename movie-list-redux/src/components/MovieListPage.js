import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions'
import MoviePagination from './MoviePagination'
import MovieList from './MovieList'

const MovieListPage = props => {
  const { getMovies } = props
  const { isFetching, error, moviesData } = props.movies
  const TOTAL_PAGES = 2
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getMovies()
  }, [getMovies])

  const getMovieList = () => {
    if (isFetching) {
      return <div>Loading...</div>
    } else if (error) {
      return <div>{error}</div>
    } else {
      let currentMovies
      if (moviesData.length > 0) {
        const start = (currentPage - 1) * Math.floor(moviesData.length / TOTAL_PAGES)
        const end = Math.floor(moviesData.length / TOTAL_PAGES) * currentPage
        currentMovies = moviesData.slice(start, end)

        return <MovieList currentMovies={currentMovies} />
      }
    }
  }

  return (
    <div className="text-center">
      <h2>Movie List</h2>
      {getMovieList()}
      <MoviePagination 
        totalPages={TOTAL_PAGES} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { getMovies })(MovieListPage)