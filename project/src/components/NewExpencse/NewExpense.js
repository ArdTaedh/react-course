import React from 'react';

import './NewExpense.scss'
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;