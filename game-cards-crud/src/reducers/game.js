import { SET_GAMES } from '../constants'

const games = (state=[], action={}) => {
  switch(action.type) {
    case SET_GAMES:
      return action.games
    default:
      return state
  }
}

export default games