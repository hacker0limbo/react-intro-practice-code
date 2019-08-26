import { 
  FETCH_MOVIES_PENDING, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_FAILURE,
  MOVIE_SELECTED, 
} from '../constants'

const initialState = {
  isFetching: false,
  error: null,
  moviesData: [],
  selectedMovie: null,
}

const movies = (state=initialState, action={}) => {
  switch(action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        isFetching: true,
        error: null,
        moviesData: [],
        selectedMovie: null,
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        isFetching: false,
        error: null,
        moviesData: action.moviesData,
        selectedMovie: null,
      }
    case FETCH_MOVIES_FAILURE:
      return {
        isFetching: false,
        error: action.error,
        moviesData: [],
        selectedMovie: null,
      }
    case MOVIE_SELECTED:
      const index = state.moviesData.findIndex(item => item.id === action.selectedMovie.id)
      if (index > -1) {
        return {
          ...state,
          selectedMovie: state.moviesData[index],
        }
      }
      return {
        ...state,
        selectedMovie: null,
      }
    default:
      return state
  }
}

export default movies