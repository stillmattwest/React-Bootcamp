import React, { Component } from 'react';
import './LottoBoard.css';
import LottoBall from '../LottoBall/LottoBall';

class LottoBoard extends Component {
  constructor() {
    super();
    this.state = {
      nums: []
    };
  }

  getRandom = max => {
    return Math.floor(Math.random() * max) + 1;
  };

  componentDidMount() {
    let numArray = [];
    for (let i = 0; i < 6; i++) {
      numArray.push(this.getRandom(40));
    }
    this.setState({ nums: numArray });
  }

  render() {
    return (
      <div className='lottoboard-container'>
        <h2>Lotto</h2>
        <div className='lottoboard-ball-container'></div>
        <ul className='lottoboard-ball-ul'>
          {this.state.nums.map((e, i) => {
            return <LottoBall key={`lottoball-${i}`} num={i} />;
          })}
        </ul>
        <div className='lottoboard-button-container'>
          <button className='lottoboard-button'>Generate</button>
        </div>
      </div>
    );
  }
}

export default LottoBoard;
