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

    const that = this;
    setTimeout(() => {
      that.setState({
        rolling: true
      });
    }, 100);
    setTimeout(() => {
      that.setState({
        rolling: false,
        dieOneVal: roll(),
        dieTwoVal: roll()
      });
    }, 310);

    // const that = this;
    // setTimeout(that.setState({ rolling: false }), 1000);
  };

  render() {
    return (
      <div className='gameboard-container'>
        <div className={'gameboard-dice-display'}>
          <Die value={this.state.dieOneVal} rolling={this.state.rolling} />
          <Die value={this.state.dieTwoVal} rolling={this.state.rolling} />
        </div>
        <div className='gameboard-btn-area'>
          <button onClick={this.rollDice} className='gameboard-roll-btn'>
            {this.state.rolling ? '...rolling' : 'roll dice!'}
          </button>
        </div>
      </div>
    );
  }
}

export default GameBoard;
