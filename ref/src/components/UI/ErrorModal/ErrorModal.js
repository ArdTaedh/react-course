import React from 'react';
import ReactDOM from 'react-dom'

import './ErrorModal.scss'
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onClick}/>
}

const Modal = props => {
    return (
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
    )
}

const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Modal
                    title={props.title}
                    message={props.message}
                    onClick={props.onClick}
                />,
                document.getElementById('modal-root')
            )}
        </>
    );
};

export default ErrorModal;
