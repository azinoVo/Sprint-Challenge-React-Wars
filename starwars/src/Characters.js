import React from 'react';

const Characters = props => {
    return (
        <div className="characterBox">
            <h3>{props.char[props.charNum]}</h3>
                <p>Gender: {props.gender[props.charNum]}</p>
                <p>Mass: {props.mass[props.charNum]}</p>
                <p>Eye-Color: {props.eye[props.charNum]} </p>
        </div>
    )  
}

export default Characters;