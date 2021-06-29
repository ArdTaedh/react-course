import React from 'react';

import './ExpenseDate.scss'

const ExpenseDate = (props) => {

    return (
        <div className="expense-date">
            <div className="expense-date__text">{props.date}</div>
        </div>
    );
};

export default ExpenseDate;