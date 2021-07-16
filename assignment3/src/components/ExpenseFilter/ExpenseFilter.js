import React, {useState} from 'react';

import './ExpenseFilter.scss'

const ExpensesFilter = (props) => {

    const [enteredDate, setEnteredDate] = useState('')

    const setDateHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const expenseDate = {
        date: new Date(enteredDate).getFullYear()
    }
    props.onSaveDate(expenseDate)
    props.onSortList(expenseDate)

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={setDateHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;