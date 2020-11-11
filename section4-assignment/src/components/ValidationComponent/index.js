import React from 'react';
import './style.css'

const ValidationComponent = ({ txtLength }) => {
    let validationText = null;

    if (txtLength < 4 && txtLength > 0) {
        return validationText = (
            <div className="validate-txt">
                <p>Text is too short!</p>
            </div>
        );
    } else if (txtLength >= 5) {
        return validationText = (
            <div className="validate-txt">
                <p>Text is too long!</p>
            </div>
        );
    } else {
        return null;
    }

    return (

        { validationText }

    );
}

export default ValidationComponent;