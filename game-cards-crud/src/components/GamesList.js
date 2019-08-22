import React from 'react'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

const GamesList = props => {
  const { games, deleteGame } = props

  const emptyMessage = (
    <p>There are no games yet in your collection</p>
  )

  if (games.length === 0) {
    return emptyMessage
  }

  return (
    <div className="ui four cards">
      {games.map(game => {
        return <GameCard deleteGame={deleteGame} game={game} key={game._id} />
      })}
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array,
  deleteGame: PropTypes.func.isRequired
}

export default GamesList