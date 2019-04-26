import React from 'react';

const Characters = props => {
    return (
        <div className={props.char[props.charNum]}>
            <h3>{props.char[props.charNum]}</h3>
            <ul>
                <li>Gender: {props.gender[props.charNum]}</li>
                <li>Mass: {props.mass[props.charNum]}</li>
            </ul>
        </div>
    )  
}

export default Characters;