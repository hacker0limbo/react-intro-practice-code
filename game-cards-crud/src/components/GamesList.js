import React from 'react'
import PropTypes from 'prop-types'

const GamesList = props => {
  const { games } = props

  const emptyMessage = (
    <p>There are no games yet in your collection</p>
  )

  const gamesList = (
    <p>games list</p>
  )

  return (
    <div>
      {games.length === 0 ? emptyMessage : gamesList}
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}

export default GamesList