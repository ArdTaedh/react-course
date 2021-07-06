import React, {useState} from 'react';

import './ExpensesFilter.scss';

const ExpensesFilter = (props) => {

    // const dates =[
    //     {
    //         name: '2019',
    //         date: 2019
    //     },
    //     {
    //         name: '2020',
    //         date: 2020
    //     },
    //     {
    //         name: '2021',
    //         date: 2021
    //     },
    //     {
    //         name: '2022',
    //         date: 2022
    //     }
    // ]

    const [enteredDate, setEnteredDate] = useState('2019')

    const setDateHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const expenseDate = {
        date: new Date(enteredDate)
    }
    props.onSaveDate(expenseDate)

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                {/* 1 way */}
                <select onChange={setDateHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>

                {/* 2 way */}
                {/*<select onChange={setDateHandler}>*/}
                {/*    {dates.map(date =>*/}
                {/*        <option key={date.date} value={date.date}>{date.name}</option>*/}
                {/*    )}*/}
                {/*</select>*/}
            </div>
        </div>
    );
};

export default ExpensesFilter;