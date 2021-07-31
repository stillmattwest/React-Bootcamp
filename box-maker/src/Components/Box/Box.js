import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      backgroundColor: this.props.backgroundColor,
      height: `${this.props.height}px`,
      width: `${this.props.width}px`
    };
    return <div style={style}></div>;
  }
}

export default Box;
