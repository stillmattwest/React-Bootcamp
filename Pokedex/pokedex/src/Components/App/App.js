import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';

class App extends Component {
  render() {
    return <Pokedex pokeList={this.props.pokeList} />;
  }
}

export default App;
