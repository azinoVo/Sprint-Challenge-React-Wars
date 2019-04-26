import React from 'react';

const Characters = props => {
    return (
        <div className={props.char[0]}>
            <h3>{props.char[0]}</h3>
            <ul>
                <li>Gender: {props.gender[0]}</li>
                <li>Mass: {props.mass[0]}</li>
            </ul>
        </div>
    )  
}

export default Characters;