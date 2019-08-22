import { SET_GAMES, ADD_GAME, GAME_FETCHED, GAME_UPDATED, GAME_DELETED } from '../constants'

export const setGames = games => {
  return {
    type: SET_GAMES,
    games
  }
}

export const gameFetched = game => {
  return {
    type: GAME_FETCHED,
    game
  }
}

// redux-thunk 做异步请求数据
export const fetchGames = () => {
  // 返回的是一个函数
  return dispatch => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)))
  }
}

export const fetchGame = id => {
  return dispatch => {
    fetch(`/api/game/${id}`)
      .then(res => res.json())
      .then(data => dispatch(gameFetched(data.game)))
  }
}

const handleResponse = (res) => {
  if (res.ok) {
    // 如果状态码是 200
    return res.json()
  } else {
    // 如果状态码是 404
    const error = new Error(res.statusText)
    error.response = res
    throw error
  }
}

export const addGame = game => {
  return {
    type: ADD_GAME,
    game
  }
}

export const saveGame = (data) => {
  // data 为需要发送的数据, { title: xxx, cover: xxx }
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(handleResponse)
      .then(gameData => dispatch(addGame(gameData.game))) // 得到后端发送回的数据, 增加 state
  }
}

const gameUpdated = game => {
  return {
    type: GAME_UPDATED,
    game
  }
}

export const updateGame = (data) => {
  // 注意更新一个 game 的时候, 需要带上对应的 id, 才能更新
  return dispatch => {
    return fetch(`/api/game/${data.gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(handleResponse)
      .then(gameData => dispatch(gameUpdated(gameData.game))) // 得到后端发送回的数据, 增加 state
  }
}

const gameDeleted = gameId => {
  return {
    type: GAME_DELETED,
    gameId
  }
}

export const deleteGame = (gameId) => {
  // 注意更新一个 game 的时候, 需要带上对应的 id, 才能更新
  return dispatch => {
    return fetch(`/api/game/${gameId}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(handleResponse)
      .then(gameData => dispatch(gameDeleted(gameId))) 
  }
}