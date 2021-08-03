import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import './TodoApp.css';

export default function Todo() {
    const starterTodos = [
        { id: 1, task: "Wash the cat", completed: false },
        { id: 2, task: "Walk the fish", completed: false },
        { id: 3, task: "Edit the blog", completed: false }
    ];
    const [todos, setTodos] = useState(starterTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: null, task: newTodoText, completed: false }]);
    }
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS (and Material UI)</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />

        </Paper>
    )
}