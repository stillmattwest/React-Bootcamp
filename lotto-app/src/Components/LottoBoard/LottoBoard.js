import React, { Component } from 'react';
import './LottoBoard.css';
import LottoBall from '../LottoBall/LottoBall';

class LottoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: []
    };
  }

  getRandom = max => {
    return Math.floor(Math.random() * this.props.max) + 1;
  };

  generateNumbers = () => {
    let numArray = [];
    for (let i = 0; i < this.props.count; i++) {
      numArray.push(this.getRandom(40));
    }
    this.setState(st => {return{...st,nums:numArray}});
  }

  componentDidMount() {
    this.generateNumbers();
  }


  render() {
    return (
      <div className='lottoboard-container'>
        <h1>Lotto</h1>
        <div className='lottoboard-ball-container'></div>
        <ul className='lottoboard-ball-ul'>
          {this.state.nums.map((e, i) => {
            return <LottoBall key={`lottoball-${i}`} num={e} />;
          })}
        </ul>
        <div className='lottoboard-button-container'>
          <button className='lottoboard-button' onClick={this.generateNumbers}>Generate</button>
        </div>
      </div>
    );
  }
}

export default LottoBoard;
