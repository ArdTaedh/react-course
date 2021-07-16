import React, {useState} from 'react';

import './NewExpense.scss'
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "../../../../assignment4/src/components/NewExpencse/AddNewExpense";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
