import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { selectMovie, getMovies } from '../actions'
import MoviePagination from './MoviePagination'
import MovieList from './MovieList'

const MovieListPage = props => {
  const { getMovies, selectMovie } = props
  const { isFetching, error, moviesData, selectedMovie } = props.movies
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

        return (
          <MovieList 
            currentMovies={currentMovies}
            selectMovie={selectMovie}
            selectedMovie={selectedMovie}
          />
        )
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

export default connect(mapStateToProps, { selectMovie, getMovies })(MovieListPage)