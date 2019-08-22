import React, { useState } from 'react'
import classNames from 'classnames'

const GameForm = props => {
  // 判断数据是否存在, 如果不存在, 说明是 addGame, 存在说明是 editGame(因为已经有数据)
  const gameIdDefault = props.game ? props.game._id : null
  const titleDefault = props.game ? props.game.title : ''
  const coverDefault = props.game ? props.game.cover : ''

  const [gameId, setGameId] = useState(gameIdDefault)
  const [title, setTitle] = useState(titleDefault)
  const [cover, setCover] = useState(coverDefault)
  const [errors, setErrors] = useState({ title: '', cover: '' })
  const [loading, setLoading] = useState(false)  

  const handleTitleChange = e => {
    setTitle(e.target.value)
    // check if contains error message
    if (errors.title) {
      setErrors({
        ...errors,
        title: ''
      })
    }
  }

  const handleCoverChange = e => {
    setCover(e.target.value)
    // check if contains error message
    if (errors.cover) {
      setErrors({
        ...errors,
        cover: ''
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    // 前端验证, 判断表单是否有填内容
    const newErrors = {}
    if (title === '') {
      newErrors.title = 'Can not be empty'
    }

    if (cover === '') {
      newErrors.cover = 'Can not be empty'
    }
    setErrors(newErrors)

    // 前端验证表单
    const isValid = Object.values(errors).includes('')
    if (isValid) {
      setLoading(true)
      props.saveGame({ gameId, title, cover })
        .catch(err => {
          err.response.json().then(({ errors }) => {
            // 后端验证失败, 得到后端发送过来的 errors 数据, 设置错误
            setErrors(errors)
            // 取消加载
            setLoading(false)
          })
        })
    }
  }

  return (
    <div>
      <form className={classNames('ui', 'form', { loading: loading })} onSubmit={handleSubmit}>
        <h1>Add New Game</h1>

        {!!errors.global && <div className="ui negative message">{errors.global}</div>}

        {/* 如果有填 title, className 为 field error, 如果有填那只有 field */}
        <div className={classNames('field', { error: !!errors.title })}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
          <span>{errors.title}</span>
        </div>
        <div className={classNames('field', { error: !!errors.cover })}>
          <label htmlFor="title">Cover Url</label>
          <input
            type="text"
            name="cover"
            value={cover}
            onChange={handleCoverChange}
          />
          <span>{errors.cover}</span>
        </div>

        <div className="field">
          {
            cover !== '' && <img src={cover} alt="cover" className="ui small bordered image" />
          }
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    </div>
  )
}

export default GameForm