import React, { Component } from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if (this.props.editing) {
      this.input.current.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.editing) {
      this.input.current.focus();
    }
  }

  componentWillUnmount() {
    console.log('Unmounted!');
  }

  handleKeyUp = e => {
    if (e.key === 'Enter') {
      this.props.toggleEdit(e.target.id);
    } else {
      this.props.handleListItemChange(e.target.id, e.target.value);
    }
  };

  handleDelete = id => {
    this.props.deleteItem(id);
  };
  render() {
    return this.props.editing ? (
      // editable item
      <li className='listitem-li-editing'>
        <span className='listitem-title'>
          <input
            ref={this.input}
            className='listitem-title-editing'
            type='text'
            id={this.props.id}
            onKeyUp={this.handleKeyUp}
            placeholder={this.props.title}
          ></input>
        </span>
      </li>
    ) : (
      // non-editable item
      <li
        className={`listitem-li ${this.props.delete ? 'listitem-remove' : ''}`}
      >
        <span className='listitem-title'>{this.props.title}</span>
        <span className='listitem-icon-container'>
          <span className='listitem-icon'>
            <FontAwesomeIcon
              className='listitem-fa'
              icon={`${this.props.delete ? '' : 'edit'}`}
              onClick={() => {
                this.props.toggleEdit(this.props.id);
              }}
            />
          </span>
          <span className='listitem-icon'>
            <FontAwesomeIcon
              className='listitem-fa'
              icon={`${this.props.delete ? '' : 'trash'}`}
              onClick={() => this.handleDelete(this.props.id)}
            />
          </span>
        </span>
      </li>
    );
  }
}

export default ListItem;
