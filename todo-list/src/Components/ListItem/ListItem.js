import React, { Component } from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListItem extends Component {
  render() {
    return (
      <li className="listitem-li">
        Remember to do this{" "}
        <span className="listitem-icon-container">
          <span className="listitem-icon">
            <FontAwesomeIcon className="listitem-fa" icon="edit" />
          </span>
          <span className="listitem-icon">
            <FontAwesomeIcon className="listitem-fa" icon="trash" />
          </span>
        </span>
      </li>
    );
  }
}

export default ListItem;
