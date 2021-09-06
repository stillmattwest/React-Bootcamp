import React from "react";
import TextField from "@material-ui/core/TextField"
import useInputState from "../../hooks/useInputState";
import "./EditTodoForm.css";


function EditTodoForm({ editTodo, id, placeHolder, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(placeHolder);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }}
            style={{ marginLeft: "1rem", width: "50%" }}
        >
            <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
        </form>

    )
}

export default EditTodoForm;