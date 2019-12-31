import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import TodoList from "../TodoList/TodoList";

// create font awesome library
library.add(faTrash, faEdit);

function App() {
  return <TodoList />;
}

export default App;
