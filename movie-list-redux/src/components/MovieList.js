import React from 'react'

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

export default MovieList