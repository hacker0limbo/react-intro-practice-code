import React, { useState, useEffect } from 'react'
import GameForm from './GameForm'
import { connect } from 'react-redux'
import { saveGame, fetchGame, updateGame } from '../actions'
import { Redirect } from 'react-router-dom'

const GameFormPage = props => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    // 生命周期
    const { match, fetchGame } = props

    // 如果是增加新内容, 那么路由为 /games/new 不存在 params._id
    // 如果是更新一个 game, 那么路由为 /game/:id 可以得到 id, 由此来区分组件
    if (match.params._id) {
      // 触发 fetchGame 这个 action => 即 gameFetched,  根据 id 得到 game 存于 action 中
      // action 匹配以后返回这个 game, map 到 props
      fetchGame(match.params._id)
    }
  }, [])

  const saveGame = (gameData) => {
    const { gameId, title, cover } = gameData

    if (gameId) {
      // 如果存在 id, 说明记录存在, 此时应该是更改状态
      return props.updateGame({ gameId, title, cover }).then(() => {
        setRedirect(true)
      })
    } else {
      // 否则为新增一条数据
      // 向后端提交表单, .then 可以跟两个参数, 第一个是正确处理, 第二个是错误处理
      return props.saveGame({ title, cover }).then(() => {
        // 如果后端也验证成功, 设置 done state 为 true, 表示数据已发送至后端
        setRedirect(true)
      })
    }
  }

  return (
    <div>
      {redirect ? <Redirect to="/games" /> : <GameForm saveGame={saveGame} game={props.game} />}
    </div>
  )
}

const mapStateToProps = (state, props) => {
  // 传入 game props, 前提是路由中存在 _id 
  // 注意, 这里需要区分是创建新的 game, 还是编辑已有的 game, 通过判断路由的 _id 是否存在
  // 同时注意, 由于 reducer 里面, 仅仅返回的 state 里面仅仅是一个元素(由于使用了 combine reducer)
  // state = { games: [{ id:xxx, cover:xxx, title:xxx }] }
  const { match } = props
  if (match.params._id) {
    // 返回 state 里面的 game
    return {
      game: state.games.find(item => item._id === match.params._id)
    }
  }

  return {
    game: null
  }
}

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame })(GameFormPage)