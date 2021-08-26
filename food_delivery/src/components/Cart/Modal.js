import React from 'react';
import ReactDOM from 'react-dom'

import './scss/Modal.scss'

const Backdrop = props => {
    return (
        <div className="backdrop" onClick={props.onHide}/>
    );
};

const ModalOverlay = props => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onHide={props.onHide} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>
                    {props.children}
                </ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal