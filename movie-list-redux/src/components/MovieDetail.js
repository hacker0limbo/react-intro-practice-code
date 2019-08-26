import React from 'react'
import { connect } from 'react-redux'

const MovieDetail = props => {
  const { selectedMovie } = props

  const getMovieDetails = () => {
    if (selectedMovie) {
      const { title, description, director, producer, release_date, rt_score } = selectedMovie 

      return (
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Title: </strong>{title}</li>
          <li className="list-group-item"><strong>Description: </strong>{description}</li>
          <li className="list-group-item"><strong>Director: </strong>{director}</li>
          <li className="list-group-item"><strong>Producer: </strong>{producer}</li>
          <li className="list-group-item"><strong>Release Date: </strong>{release_date}</li>
          <li className="list-group-item"><strong>Rate Score: </strong>{rt_score}</li>
        </ul>
      )
    }

    return <p>Please Selecte a Movie to get Details</p>
  }

  return (
    <div>
      <h2 className="text-center">
        Movie Details
      </h2>
      {getMovieDetails()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.movies.selectedMovie
  }
}


export default connect(mapStateToProps)(MovieDetail)