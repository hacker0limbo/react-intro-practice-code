import React from 'react'
import { connect } from 'react-redux'
import { selectMovie } from '../actions'

// MovieList 是一个容器组件
const MovieList = props => {
  const { currentMovies, selectedMovie, selectMovie } = props

  const activeSelectedMovie = movie => {
    if (selectedMovie) {
      if (movie.id === selectedMovie.id) {
        return 'active'
      }
    }
  }

  return (
    <ul className="list-group mb-3">
      {currentMovies.map(movie => (
        <li
          key={movie.id}
          className={`list-group-item list-group-item-action ${activeSelectedMovie(movie)}`}
          onClick={() => selectMovie(movie)}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.movies.selectedMovie
  }
}

export default connect(mapStateToProps, { selectMovie })(MovieList)