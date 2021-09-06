import React, { useEffect } from 'react';
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import useTodoState from '../../hooks/useTodoState';
import './TodoApp.css';


export default function Todo() {

    const starterTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
    // add of our app functionality is in a custom hook
    const { todos, addTodo, removeTodo, toggleCompleted, editTodo } = useTodoState(starterTodos);
    // persist todos. The [todos] param is built into useEffect. It will ignore the useEffect internal function unless the indicated state object has changed
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


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
                    <TodoList todos={todos}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>


        </Paper>
    )
}