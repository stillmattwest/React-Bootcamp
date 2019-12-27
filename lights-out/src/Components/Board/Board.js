import React, { Component } from 'react';
import './Board.css';
import Cell from '../Cell/Cell';

class Board extends Component {
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
  render() {
    return (
      <div className='board-container'>
        <table>
          <tbody>{this.generateBoard()}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
