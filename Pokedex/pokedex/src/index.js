import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import PokeData from './Data/PokeList';

// TODO - Pass props to App
ReactDOM.render(<App pokeList={PokeData} />, document.getElementById('root'));
