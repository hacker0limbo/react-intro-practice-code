import { SET_GAMES, ADD_GAME, GAME_FETCHED, GAME_UPDATED, GAME_DELETED } from '../constants'

const games = (state=[], action={}) => {
  switch(action.type) {
    case SET_GAMES:
      return action.games
    case ADD_GAME:
      return [
        ...state,
        action.game
      ]
    case GAME_FETCHED:
      // 根据 id 向服务端发起请求, 得到对应的数据
      const index = state.findIndex(item => item._id === action.game._id)
      if (index > -1) {
        // 如果找到, 那么实际这里的 state 只存放了一个数据, 就是对应 id 的 game
        // state = [{ id: xxx, title: xxx, cover: xxx }]
        return state.map(item => {
          if (item._id === action.game._id) {
            return action.game
          }
          return item
        })
      } else {
        return [
          ...state,
          action.game
        ]
      }
    case GAME_UPDATED:
      return state.map(item => {
        if (item._id === action.game._id) {
          // 找到对应的数据, 此时数据应该已被更新
          return action.game
        }
        return item
      })
    case GAME_DELETED:
      return state.filter(item => item._id !== action.gameId)
    default:
      return state
  }
}

export default games