import React, { Component } from 'react';
import './BoxFactory.css';
import uuid from 'uuid';
import Box from '../Box/Box';

class BoxFactory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      height: 0,
      width: 0,
      backgroundColor: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newBox = {
      height: this.state.height,
      width: this.state.width,
      backgroundColor: this.state.backgroundColor
    };
    let boxArray = JSON.parse(JSON.stringify(this.state.boxes));
    boxArray.push(newBox);
    console.log(boxArray);
    this.setState({ boxes: boxArray });
  };
  render() {
    return (
      <div>
        <h2>Box Maker!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='height'>Height: </label>
          <input
            type='text'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
          ></input>
          <br />
          <label htmlFor='width'>Width: </label>
          <input
            type='text'
            name='width'
            value={this.state.width}
            onChange={this.handleChange}
          ></input>
          <br />
          <label htmlFor='backgroundColor'>Background Color: </label>
          <input
            type='text'
            name='backgroundColor'
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          ></input>
          <br />
          <button type='submit' onSubmit={this.handleSubmit}>
            Add Box
          </button>
        </form>
        <div>
          {this.state.boxes.map(box => {
            return (
              <Box
                height={box.height}
                width={box.width}
                backgroundColor={box.backgroundColor}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BoxFactory;
