import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import GamesList from './GamesList'
import { fetchGames, deleteGame } from '../actions'

const GamesPage = props => {
  const { games, fetchGames, deleteGame } = props
  
  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  return ( 
    <div>
      <GamesList games={games} deleteGame={deleteGame} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage)