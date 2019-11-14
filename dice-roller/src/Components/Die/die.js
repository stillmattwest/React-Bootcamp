import React, { Component } from 'react';
import './die.css';

class Die extends Component {
  render() {
    return (
      <span className='die-span'>
        <i
          className={
            this.props.rolling
              ? 'die' + ' ' + this.props.value + ' ' + 'die-shake'
              : 'die' + ' ' + this.props.value
          }
        ></i>
      </span>
    );
  }
}

export default Die;
