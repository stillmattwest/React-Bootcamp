import React, { Component } from 'react';
import './App.css';
import LottoBoard from '../LottoBoard/LottoBoard';

class App extends Component {
  // count = the number of lottoballs generated
  // max = the highest lotto number allowed in the lottoball
  render() {
    return (
      <div>
        <LottoBoard count={6} max={40} title={"Lotto"}/>
        <LottoBoard count={4} max={10} title={"Mini-Daily"} />}
      </div>
    );
  }
}

export default App;
