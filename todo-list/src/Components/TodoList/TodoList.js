import React, { Component } from 'react';
import './TodoList.css';
import ListItem from '../ListItem/ListItem';
import uuid from 'react-uuid';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    };
  }

  addListItem = () => {
    let newListItems = JSON.parse(JSON.stringify(this.state.listItems));
    // check to see if any items are being edited. If so, just add the item
    let editing = false;
    for (let i = 0; i < newListItems.length; i++) {
      if (newListItems[i].editing) {
        newListItems[i].editing = false;
        editing = true;
      }
    }
    if (!editing) {
      newListItems.push({
        title: '',
        complete: false,
        editing: true,
        delete: false,
        id: uuid()
      });
    }
    this.setState({ listItems: newListItems });
  };

  toggleEdit = id => {
    // toggles the editing mode
    let newListItems = JSON.parse(JSON.stringify(this.state.listItems));
    for (let i = 0; i < newListItems.length; i++) {
      if (newListItems[i].id === id) {
        // toggle editing property
        newListItems[i].editing
          ? (newListItems[i].editing = false)
          : (newListItems[i].editing = true);
      }
    }

    this.setState({ listItems: newListItems });
  };

  handleListItemChange = (id, title) => {
    // updates the listItem title on every keyup
    let newListItems = JSON.parse(JSON.stringify(this.state.listItems));
    for (let i = 0; i < newListItems.length; i++) {
      if (newListItems[i].id === id) {
        // limit todo items to fifty chars
        if (title.length <= 50) {
          newListItems[i].title = title;
        }
      }
    }
    this.setState({ listItems: newListItems });
  };

  deleteItem = id => {
    let newListItems = JSON.parse(JSON.stringify(this.state.listItems));
    for (let i = 0; i < newListItems.length; i++) {
      if (newListItems[i].id === id) {
        // remove title and give delete class
        newListItems[i].title = '';
        newListItems[i].delete = true;
        this.setState({ listItems: newListItems });
        // remove item after 400 ms
        setTimeout(() => {
          newListItems.splice(i, 1);
          this.setState({ listItems: newListItems });
        }, 400);
      }
    }
  };

  render() {
    return (
      <div className='todolist-container'>
        <h2 className='todolist-title'>TODO LIST</h2>
        <div className='todolist-list-item-container'>
          <ul className='todolist-list-item-ul'>
            {this.state.listItems.map(e => {
              return (
                <ListItem
                  title={e.title}
                  complete={e.complete}
                  editing={e.editing}
                  delete={e.delete}
                  id={e.id}
                  key={e.id}
                  toggleEdit={this.toggleEdit}
                  handleListItemChange={this.handleListItemChange}
                  deleteItem={this.deleteItem}
                />
              );
            })}
          </ul>
        </div>
        <div className='todolist-addbutton-container'>
          <button
            type='button'
            className='todolist-button'
            onClick={this.addListItem}
          >
            Add Item
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
