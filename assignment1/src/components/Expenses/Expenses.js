import React from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = () => {

    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14).toLocaleString('en-GB').split(',')[0]
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12).toLocaleString('en-GB').split(',')[0]
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28).toLocaleString('en-GB').split(',')[0]
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12).toLocaleString('en-GB').split(',')[0]
        },
    ];

    return (
        <div className="expenses">
            <ExpenseItem
                id={expenses[0].id}
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                id={expenses[1].id}
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                id={expenses[2].id}
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                id={expenses[3].id}
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </div>
    );
};

export default Expenses;