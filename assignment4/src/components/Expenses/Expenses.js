import React, {useState} from 'react';
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

import './Expenses.scss'
import Card from "../Card/Card";
import ExpensesList from "../ExpensesLiist/ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
