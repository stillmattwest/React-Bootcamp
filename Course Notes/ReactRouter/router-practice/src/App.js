import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// COMPONENTS
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <div >
        <Switch>
          <Route exact path="/second" component={SecondComponent} />
          <Route exact path="/third" component={ThirdComponent} />
          <Route exact path="/" component={FirstComponent} />

          <Route component={NotFound} />
        </Switch>
      </div>
      <a href="/" style={{ marginLeft: "0" }}>First</a>
      <a href="/second" style={{ marginLeft: "10px" }}>Second</a>
      <a href="/third" style={{ marginLeft: "10px" }}>Third</a>
    </div >
  );
}

export default App;
