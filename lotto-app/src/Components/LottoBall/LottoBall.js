import React, { Component } from 'react';
import './LottoBall.css';

class LottoBall extends Component {
  render() {
    return (
      <li className='lottoball-ball'>
        <p className='lottoball-number'>{this.props.num}</p>
      </li>
    );
  }
}

export default LottoBall;
