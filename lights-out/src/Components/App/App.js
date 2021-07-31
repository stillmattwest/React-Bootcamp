import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Board from '../Board/Board';

class App extends Component {
  render() {
    return <Board numRows={5} numColumns={5} />;
  }
}

export default App;
