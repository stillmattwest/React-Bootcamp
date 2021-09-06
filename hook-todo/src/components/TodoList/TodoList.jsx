import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "../Todo.js/Todo";
import { v4 as uuid } from "uuid";

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => {
                    return (
                        <>
                            <Todo task={todo.task} key={todo.id} completed={todo.completed} key={uuid()} />
                            <Divider />
                        </>
                    )

                })}
            </List>
        </Paper>
    )
}