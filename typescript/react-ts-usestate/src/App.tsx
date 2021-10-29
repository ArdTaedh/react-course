import React, { useState } from 'react';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText)
        setTodos((prevTodos)=> {
            return prevTodos.concat(newTodo)
        })
    }

    const deleteTodoHandler = (todoId: string) => {
        setTodos(prevState => {
            return  prevState.filter(todo => todo.id !== todoId)
        })
    }

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}  />
            <Todos items={todos} deleteTodo={deleteTodoHandler} />
        </div>
    );
};

export default App;