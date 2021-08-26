import React from 'react';

import './Header.scss'
import img from '../../../assets/meals.jpg'
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = props => {
    return (
        <>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartButton onShow={props.onShowCart} />
            </header>
            <div className='main-image'>
                <img
                    src={img}
                    alt=""/>
            </div>
        </>
    );
};

export default Header;