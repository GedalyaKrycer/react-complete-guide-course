import React, { useEffect } from 'react';
import classes from './cockpit.module.css'



const Cockpit = ({ showPersons, personsLength, clicked, title }) => {

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
        // Http request…

        setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000)

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
            >
                Toggle Content
        </button>
        </div>
    );
};

export default React.memo(Cockpit);
