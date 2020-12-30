import React from 'react';
import classes from './PizzaImage.css';
import pImg from '../../assets/pizza.jpg';

const PizzaImage = () => {
    return (
        <div className={classes.PizzaImage}>
            <img src={pImg} className={classes.PizzaImg} alt="Pizza with olives and spinach on a table of ingredients" />
        </div>
    )
}

export default PizzaImage
