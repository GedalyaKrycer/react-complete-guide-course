import React from 'react';
import classes from './persons.module.css'

const Person = ({ name, age, click, changed, children }) => {

    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    }
    return (




        <div className={classes.person}>
            <h3 onClick={click}>I am a {name} and I am {age} years old!</h3>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name} />
        </div>
    );

}

export default Person;

