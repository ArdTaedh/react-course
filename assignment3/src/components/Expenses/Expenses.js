import React, {useState} from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

import './Expenses.scss'
import Card from "../Card/Card";

const Expenses = (props) => {

    const [date, sortDate] = useState(props.items.date)

    const onSaveDateHandler = (enteredDate) => {
        console.log('In Expenses.js')
        console.log(enteredDate)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onSaveDate={onSaveDateHandler} />
            {
                props.items.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
            />
            ))
            }
        </Card>
    );
};

export default Expenses;