import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "../Todo.js/Todo";


export default function TodoList({ todos, removeTodo, toggleCompleted, editTodo }) {
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => {
                        return (
                            <>
                                <Todo
                                    task={todo.task}
                                    id={todo.id}
                                    completed={todo.completed}
                                    key={todo.id}
                                    removeTodo={removeTodo}
                                    toggleCompleted={toggleCompleted}
                                    editTodo={editTodo}
                                />
                                {i < todos.length - 1 ? <Divider /> : null}
                            </>
                        )

                    })}
                </List>
            </Paper>
        )
    }

    return null;

}