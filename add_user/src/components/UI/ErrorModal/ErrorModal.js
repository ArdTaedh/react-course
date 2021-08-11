import React from 'react';

import './ErrorModal.scss'
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = props => {
    return (
        <div>
            <div className="backdrop" onClick={props.onClick}/>
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onClick}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
