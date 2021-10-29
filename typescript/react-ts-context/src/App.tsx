import React from 'react';

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

const App = () => {
    return (
        <TodosContextProvider>
            <NewTodo  />
            <Todos  />
        </TodosContextProvider>
    );
};

export default App;