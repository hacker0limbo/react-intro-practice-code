import { SET_GAMES } from '../constants'

export const setGames = games => {
  return {
    type: SET_GAMES,
    games
  }
}

export const fetchGames = () => {
  // 返回的是一个函数
  return dispatch => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)))
  }
}