import React, { Component } from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListItem extends Component {
  render() {
    return (
      <li className="listitem-li">
        Remember to do this{" "}
        <span className="listitem-icon">
          <FontAwesomeIcon icon="faEdit" />
        </span>
        <span className="listitem-icon">
          <FontAwesomeIcon icon="faTrash" />
        </span>
      </li>
    );
  }
}

export default ListItem;
