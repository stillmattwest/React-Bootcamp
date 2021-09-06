import React from "react"
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function Todo({ task, completed }) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}