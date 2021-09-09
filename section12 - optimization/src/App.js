import React, {useState, useCallback} from 'react';

import './App.scss'
import Button from "./components/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

const App = () => {
    const [showP, setShowP] = useState(false)
    console.log("APP RUNNING")

    const showPHandler = useCallback(() => {
        setShowP((prevShowP) => !prevShowP)
    }, [])

    return (
        <div className="app">
            <h1>Hi There</h1>
            <DemoOutput show={false} />
            <Button show={showPHandler}>Show</Button>
        </div>
    );
};

export default App;