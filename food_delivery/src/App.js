import {useState} from "react";

import './App.scss';
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
