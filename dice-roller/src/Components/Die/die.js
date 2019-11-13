import React, { Component } from 'react';
import './die.css';

class Die extends Component {
  render() {
    return (
      <span className='die-span'>
        <i className={'die' + ' ' + this.props.value}></i>
      </span>
    );
  }
}

export default Die;
