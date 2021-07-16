import React, {useState} from 'react';

import './NewExpense.scss'
import ExpenseForm from "./ExpenseForm";
import AddFormButton from "../AddFormButton/AddFormButton";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing  && <AddFormButton start={startEditingHandler}/>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />}
        </div>
    )
}

export default NewExpense
