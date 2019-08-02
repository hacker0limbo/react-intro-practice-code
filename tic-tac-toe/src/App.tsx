import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type ONGOING_GAME = -1
const ONGOING_GAME = -1

interface IState {
  board: Player[]
  nextPlayerTurn: Player
  gameWon: Player | ONGOING_GAME
}

enum Player {
  None = 0,
  One = 1,
  Two = 2
}

class App extends Component<{}, IState> {

  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      board: [
        Player.None, 
        Player.None, 
        Player.None, 
        Player.None, 
        Player.None, 
        Player.None, 
        Player.None, 
        Player.None, 
        Player.None
      ],
      nextPlayerTurn: Player.One,
      gameWon: ONGOING_GAME
    }
  }

  public checkGameOver = (board: Player[]): Player | ONGOING_GAME => {
    if (board[0] === board[1] && board[1] === board[2] && board[2] !== Player.None) {
      return board[0];
    } else if (board[3] === board[4] && board[4] === board[5] && board[5] !== Player.None) {
      return board[3];
    } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== Player.None) {
      return board[8];
    } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== Player.None) {
      return board[0];
    } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== Player.None) {
      return board[1];
    } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== Player.None) {
      return board[2];
    } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== Player.None) {
      return board[0];
    } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== Player.None) {
      return board[2];
    }

    for (const player of board) {
      if (player === Player.None) {
        return ONGOING_GAME;
      }
    }

    return Player.None;
  }

  public handleClick = (index: number): void => {

    if (this.state.gameWon !== ONGOING_GAME || this.state.board[index] !== 0) {
      return
    }

    // 得到 board index 以后需要返回一个新的 state, 并将里面的对应 index 元素改成 1 或 2
    const newBoard: Player[] = this.state.board.slice()
    newBoard[index] = this.state.nextPlayerTurn

    const gameWon = this.checkGameOver(newBoard)

    this.setState({
      board: newBoard,
      nextPlayerTurn: 3 - this.state.nextPlayerTurn,
      gameWon
    })
  }

  public renderCell = (index: number) => {
    return (
      <div 
        className="cell" 
        onClick={() => this.handleClick(index)}
        key={index}
        data-player={this.state.board[index]}
      >
      </div>
    )
  }

  public renderBoard = () => {
    return (
      <div className="board-container">
        {/* 传到 cell 里面的就是 board 里的每个元素的 index */}
        {this.state.board.map((value, key) => this.renderCell(key))}
      </div>
    )
  }

  public renderStatus = () => {
    const { gameWon } = this.state
    const winningText = gameWon !== Player.None ? `Player ${gameWon} won` : 'The game is draw'

    return (
      <div style={{marginTop: "30px"}}>
        {"Player 1 is green"}<br />
        {"Player 2 is red"}<br />
        {gameWon === ONGOING_GAME ? 'Game is ongoing': winningText}<br />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.renderBoard()}
        {this.renderStatus()}
      </div>
    );  
  }
}

export default App;
