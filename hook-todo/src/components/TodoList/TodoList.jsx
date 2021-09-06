import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "../Todo.js/Todo";
import { uuid } from "uuidv4";

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => {
                    return (
                        <>
                            <Todo task={todo.task} key={todo.id} id={todo.id} completed={todo.completed} key={uuid()} removeTodo={props.removeTodo} toggleCompleted={props.toggleCompleted} />
                            <Divider />
                        </>
                    )

                })}
            </List>
        </Paper>
    )
}