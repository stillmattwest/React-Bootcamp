import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import { uuid } from "uuidv4";
import './TodoApp.css';

export default function Todo() {
    const starterTodos = [
        { id: uuid(), task: "Wash the cat", completed: false },
        { id: uuid(), task: "Walk the fish", completed: false },
        { id: uuid(), task: "Edit the blog", completed: false }
    ];
    const [todos, setTodos] = useState(starterTodos);

    const addTodo = newTodoText => {
        const nextId = uuid();
        setTodos([...todos, { id: { nextId }, task: newTodoText, completed: false }]);
    }

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    const toggleCompleted = todoId => {
        const updatedTodos = todos.map(todo => {
            return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo;
        });
        setTodos(updatedTodos);
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
            <Grid container justify='center'>
                <Grid item xs={11} md={8} lg={4} style={{ marginTop: "1 rem" }}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />
                </Grid>
            </Grid>


        </Paper>
    )
}