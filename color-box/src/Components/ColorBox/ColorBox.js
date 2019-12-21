import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor() {
    super();
    this.state = {
      color: ""
    };
  }

  getRandomColor = () => {
    const colorArray = [
      "#FFE2D1",
      "#E1F0C4",
      "#6BAB90",
      "#55917F",
      "#5E4C5A",
      "#5F464B",
      "#8E4A49",
      "#7DAA92",
      "#80FFEC",
      "#C2FBEF",
      "#DFD6A7",
      "#F7CE5B",
      "#F7B05B",
      "#1F1300"
    ];
    colorArray.splice(colorArray.indexOf(this.state.color), 1);
    let color = Math.floor(Math.random() * colorArray.length);
    return colorArray[color];
  };

  handleClick = () => {
    let color = this.getRandomColor();
    this.setState(st => {
      return { ...st, color: color };
    });
  };

  componentDidMount() {
    let color = this.getRandomColor();
    this.setState(st => {
      return { ...st, color: color };
    });
  }
  render() {
    return (
      <div
        className="colorbox-box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default ColorBox;
