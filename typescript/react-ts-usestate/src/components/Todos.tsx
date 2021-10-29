import React from "react";
import Todo  from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

const Todos: React.FC<{items: Todo[]; deleteTodo: (todoId: string)=> void}> = (props ) => {

    return (
        <ul className={classes.todos}>
            {props.items.map(item => (
                <TodoItem key={item.id} text={item.text} removeTodo={props.deleteTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
};

export default Todos;