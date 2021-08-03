import React from "react";
import { v4 as uuid } from "uuid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => {
                    return (
                        <>
                            <ListItem>
                                <ListItemText key={uuid()}>{todo.task}</ListItemText>
                            </ListItem>
                            <Divider />
                        </>
                    )

                })}
            </List>
        </Paper>
    )
}