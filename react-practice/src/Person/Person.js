import React from 'react';
import classes from './persons.module.css'

const Person = ({ name, age, click, changed, children }) => {

    return (
        <div className={classes.person}>
            <h3 onClick={click}>I am a {name} and I am {age} years old!</h3>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name} />
        </div>
    );

}

export default Person;

