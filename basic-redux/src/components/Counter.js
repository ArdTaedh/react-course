import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../store/counter'

const Counter = () => {
    const counter = useSelector(state => state.counter.counter)
    const toggle = useSelector(state => state.counter.show)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {toggle && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>decrement</button>
                <button onClick={increaseHandler}>+5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
