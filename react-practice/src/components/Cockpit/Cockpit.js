import React, { useEffect, useRef, useContext } from 'react';
import classes from './cockpit.module.css';
import AuthContext from '../../context/auth-context';



const Cockpit = ({ showPersons, personsLength, clicked, title, handleLogin }) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);


    // CSS Classes Array that will hold class names
    const assignedClasses = [];

    let btnClass = "";

    if (showPersons) {
        btnClass = classes.red;
    }

    if (personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    useEffect(() => {
        console.log('[Cockpit.js] 1st useEffect');

        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000)

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] Cleanup work in useEffect');
            // clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
        }
    });

    return (
        <div className={classes.cockpit}>
            <h1>{title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={clicked}
                ref={toggleBtnRef}
            >
                Toggle Content
        </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(Cockpit);
