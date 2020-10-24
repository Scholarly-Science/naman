import React from 'react';
import './AssignmentsCards.css';

function AssignmentCards({ image, label }) {
    return (
        <div className='assignmentCards' 
            style={{ background: `#fff url('${image}') top left no-repeat`, backgroundSize: 'contain' }}
        >
            <h4>{label}</h4>
        </div>
    )
}

export default AssignmentCards
