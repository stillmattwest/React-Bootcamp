import React, { Component } from "react";
import "./App.css";
import BoxBoard from "../BoxBoard/BoxBoard";

class App extends Component {
  render() {
    return <BoxBoard numBoxes={18} />;
  }
}

export default App;
