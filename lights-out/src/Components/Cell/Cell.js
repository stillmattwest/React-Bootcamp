import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  handleClick = (row, col) => {
    this.props.toggleCell(row, col);
  };
  render() {
    return (
      <div
        className={`cell ${this.props.lit ? 'cell-lit' : ''}`}
        onClick={() => this.handleClick(this.props.row, this.props.col)}
      ></div>
    );
  }
}

export default Cell;
