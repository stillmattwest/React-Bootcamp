import useLocalStorageState from "./useLocalStorageState";
import { uuid } from "uuidv4";


export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
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

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => {
            return todo.id === todoId ? { ...todo, task: newTask } : todo;
        });

        setTodos(updatedTodos);
    }
    return {
        todos,
        addTodo: addTodo,
        removeTodo: removeTodo,
        toggleCompleted: toggleCompleted,
        editTodo, editTodo
    }

}