import React, {useState} from 'react';

import './AddUser.scss'
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState(false)

    const usernameChangeHandler = e => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = e => {
        setEnteredAge(e.target.value)
    }

    const addUserHandler = e => {
        e.preventDefault()

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            })
            return
        }

        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const errorHandler = () => {
        setError(false)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;
