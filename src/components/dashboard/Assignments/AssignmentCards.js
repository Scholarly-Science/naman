import React from 'react';
import './AssignmentsCards.css';

function AssignmentCards({ image, label }) {
    return (
        <div className='assignmentCards'>
            <img src={image} alt={image} />
            <h4>{label}</h4>
        </div>
    )
}

export default AssignmentCards
