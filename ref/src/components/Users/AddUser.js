import React, {useState, useRef} from 'react';

import './AddUser.scss'
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = props => {

    const nameInputRef =  useRef()
    const ageInputRef =  useRef()

    const [error, setError] = useState(false)

    const addUserHandler = e => {
        e.preventDefault()

        const enteredUserName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return
        }

        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            })
            return
        }

        props.onAddUser(enteredUserName, enteredUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
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
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;
