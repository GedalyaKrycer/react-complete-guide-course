import React from 'react';
import './style.css'

const CharComponent = ({ charText, click }) => {


    return (

        <button className="chars" onClick={click}>
            {charText}
        </button>

    );
}

export default CharComponent;