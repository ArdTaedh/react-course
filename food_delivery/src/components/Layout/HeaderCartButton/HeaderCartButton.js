import React from 'react';

import './HeaderCartButton.scss'
import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = props => {
    return (
        <button className='button'>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>
               3
            </span>
        </button>
    );
};

export default HeaderCartButton;