import axios from 'axios'
import { 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_FAILURE, 
  FETCH_MOVIES_PENDING, 
  MOVIE_SELECTED, 
} from '../constants'

export const fetchMoviesSuccess = moviesData => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    moviesData
  }
}

export const fetchMoviesPending = () => {
  return {
    type: FETCH_MOVIES_PENDING
  }
}

export const fetchMoviesFailure = error => {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  }
}

export const selectMovie = selectedMovie => {
  return {
    type: MOVIE_SELECTED,
    selectedMovie,
  }
}

export const getMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesPending())

    axios.get('https://ghibliapi.herokuapp.com/films')
      .then(res => {
        dispatch(fetchMoviesSuccess(res.data))
      }).catch(error => {
        // api 提供的 error message 不是很好, 自定义
        dispatch(fetchMoviesFailure('404 not found'))
      })
  }
}