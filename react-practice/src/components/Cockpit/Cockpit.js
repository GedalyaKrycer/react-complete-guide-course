import React from 'react';
import classes from './cockpit.module.css'



const Cockpit = ({ showPersons, persons, clicked, title }) => {

    // CSS Classes Array that will hold class names
    const assignedClasses = [];

    let btnClass = "";

    if (showPersons) {
        btnClass = classes.red;
    }

    if (persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

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

export default Cockpit;
