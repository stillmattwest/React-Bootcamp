import React, { Component } from 'react';
import './Board.css';
import Cell from '../Cell/Cell';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: this.generateGameStateGrid()
    };
  }
  generateBoard = () => {
    // generates a 5x5 table
    return Array.from(Array(this.props.numRows)).map((row, rowNum) => {
      return (
        <tr key={`row-${rowNum}`}>
          {Array.from(Array(this.props.numColumns)).map((col, colNum) => {
            return (
              <td key={`${rowNum}-${colNum}`}>
                <Cell />
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
  render() {
    return (
      <div className='board-container'>
        {console.log('gameState: ', this.state.gameState)}
        <table>
          <tbody>{this.generateBoard()}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
