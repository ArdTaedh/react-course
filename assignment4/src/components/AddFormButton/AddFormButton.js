import React from 'react';

const AddFormButton = (props) => {
    return (
        <button type="submit" onClick={props.start}> Add New Expense</button>
    );
};

export default AddFormButton;
