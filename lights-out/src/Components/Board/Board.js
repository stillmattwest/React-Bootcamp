import React, { Component } from 'react';
import './Board.css';
import Cell from '../Cell/Cell';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: this.generateGameStateGrid(),
      started: false,
      won: false
    };
  }
  componentDidMount() {
    if (!this.state.started) {
      this.lightInitialCells();
    }
    this.setState({ started: true });
  }
  generateBoard = () => {
    // generates a numRows x numColumns table
    return Array.from(Array(this.props.numRows)).map((row, rowNum) => {
      return (
        <tr key={`row-${rowNum}`}>
          {Array.from(Array(this.props.numColumns)).map((col, colNum) => {
            return (
              <td key={`${rowNum}-${colNum}`}>
                <Cell
                  row={rowNum}
                  col={colNum}
                  lit={this.state.gameState[rowNum][colNum]}
                  toggleCell={this.toggleCell}
                />
              </td>
            );
          })}
        </tr>
      );
    });
  };

  generateGameStateGrid = () => {
    return Array.from(Array(this.props.numRows)).map(row => {
      return Array.from(Array(this.props.numColumns)).map((e, i) => {
        return 0;
      });
    });
  };

  getRandom = max => {
    return Math.floor(1 + Math.random() * max) - 1;
  };

  lightInitialCells = () => {
    let initialCells = [];
    let numLights = Math.ceil(this.props.numRows / 2);
    for (let i = 0; i < numLights; i++) {
      initialCells.push({
        row: this.getRandom(this.props.numRows),
        col: this.getRandom(this.props.numColumns)
      });
    }
    let newGameState = JSON.parse(JSON.stringify(this.state.gameState));
    initialCells.forEach(cellObj => {
      let row = cellObj.row;
      let col = cellObj.col;
      newGameState[row][col] = newGameState[row][col] ? 0 : 1;
    });
    this.setState({ gameState: JSON.parse(JSON.stringify(newGameState)) });
  };

  toggleCell = (row, col) => {
    if (this.state.won) {
      return;
    }
    let newGameState = JSON.parse(JSON.stringify(this.state.gameState));
    // toggle cell
    newGameState[row][col] = newGameState[row][col] ? 0 : 1;
    // toggle cell above
    if (row > 0) {
      newGameState[row - 1][col] = newGameState[row - 1][col] ? 0 : 1;
    }
    // toggle cell below
    if (row < this.props.numRows - 1) {
      newGameState[row + 1][col] = newGameState[row + 1][col] ? 0 : 1;
    }
    // toggle cell to left
    if (col > 0) {
      newGameState[row][col - 1] = newGameState[row][col - 1] ? 0 : 1;
    }
    // toggle cell to right
    if (col < this.props.numColumns - 1) {
      newGameState[row][col + 1] = newGameState[row][col + 1] ? 0 : 1;
    }
    this.setState({ gameState: JSON.parse(JSON.stringify(newGameState)) });
    this.checkWin();
  };

  checkWin = () => {
    let won = true;
    this.state.gameState.forEach(row => {
      row.forEach(cell => {
        if (cell) {
          won = false;
        }
      });
    });
    if (won) {
      this.setState({ won: won });
    }
  };

  render() {
    if (this.state.won) {
      return (
        <div className='board-container'>
          <h2 className='board-title win-message'>
            <span className='board-neon-red'>You</span>
            <span className='board-neon-blue'>Win</span>
          </h2>
          <table className='board-table'>
            <tbody>{this.generateBoard()}</tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className='board-container'>
          <h2 className='board-title'>
            <span className='board-neon-red'>Lights</span>
            <span className='board-neon-blue'>Out</span>
          </h2>
          <table className='board-table'>
            <tbody>{this.generateBoard()}</tbody>
          </table>
        </div>
      );
    }
  }
}

export default Board;
