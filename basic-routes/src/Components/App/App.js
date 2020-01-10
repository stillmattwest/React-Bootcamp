import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Apple from '../Apple/Apple';
import Orange from '../Orange/Orange';
import Pear from '../Pear/Pear';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path='/apple' component={Apple} />
        <Route path='/orange' component={Orange} />
        <Route path='/pear' component={Pear} />
      </div>
    );
  }
}

export default App;
