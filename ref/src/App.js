import React, {useState} from 'react';

import './App.scss'
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {

    const [usersList, setUsersList] = useState([])

    const addUserHandler = (username, age) => {
        setUsersList((prevUserList)=> {
            return [...prevUserList, {name: username, age: age, id:Math.random().toString()}]
        })
    }

    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </>
    );
};

export default App;
