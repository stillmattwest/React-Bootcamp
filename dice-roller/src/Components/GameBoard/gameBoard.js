import React, { Component } from 'react';
import './gameBoard.css';
import Die from '../Die/die';

class GameBoard extends Component {
  state = {
    rolling: false,
    dieOneVal: 'fas fa-dice-six',
    dieTwoVal: 'fas fa-dice-six'
  };

  rollDice = () => {
    let roll = function() {
      console.log('rolling!');
      const rand = Math.floor(1 + Math.random() * 6);
      let result = '';
      switch (rand) {
        case 1:
          result = 'fas fa-dice-one';
          break;
        case 2:
          result = 'fas fa-dice-two';
          break;
        case 3:
          result = 'fas fa-dice-three';
          break;
        case 4:
          result = 'fas fa-dice-four';
          break;
        case 5:
          result = 'fas fa-dice-five';
          break;
        default:
          result = 'fas fa-dice-six';
      }
      return result;
    };

    return this.setState({
      dieOneVal: roll(),
      dieTwoVal: roll()
    });
  };

  render() {
    return (
      <div className='gameboard-container'>
        <div className='gameboard-dice-display'>
          <Die value={this.state.dieOneVal} />
          <Die value={this.state.dieTwoVal} />
        </div>
        <div className='gameboard-btn-area'>
          <button onClick={this.rollDice} className='gameboard-roll-btn'>
            Roll Dice!
          </button>
        </div>
      </div>
    );
  }
}

export default GameBoard;
