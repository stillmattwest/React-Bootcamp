import React, { Component } from "react";
import "./BoxBoard.css";
import ColorBox from "../ColorBox/ColorBox";

class BoxBoard extends Component {
  RenderBoxes = () => {
    let boxArray = [];
    for (let i = 0; i < this.props.numBoxes; i++) {
      boxArray.push(<ColorBox />);
    }
    return boxArray;
  };
  render() {
    return (
      <div className="boxboard-container">
        <ul className="boxboard-ul">
          {this.RenderBoxes().map((e, i) => (
            <li key={`color-box-${i}`}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BoxBoard;
