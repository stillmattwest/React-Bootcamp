import React, { Component } from "react";
import "./TodoList.css";
import ListItem from "../ListItem/ListItem";

class TodoList extends Component {
  render() {
    return (
      <div className="todolist-container">
        <h2 className="todolist-title">Todo List</h2>
        <div className="todolist-list-item-container">
          <ul className="todolist-list-item-ul">
            <ListItem />
            <ListItem />
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
