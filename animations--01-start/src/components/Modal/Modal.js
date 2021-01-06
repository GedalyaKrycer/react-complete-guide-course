import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {

    return (
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClose'
            }}
            onEnter={() => console.log('OnEnter')}
            onEntering={() => console.log('OnEntering')}
            onEntered={() => console.log('OnEntered')}
            onExit={() => console.log('OnExit')}
            onExiting={() => console.log('OnExiting')}
            onExited={() => console.log('OnExited')}
        >


            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>



        </CSSTransition>
    )

};

export default modal;