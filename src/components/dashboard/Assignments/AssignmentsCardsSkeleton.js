import React from 'react';
import './AssignmentsCards.css';
import Skeleton from 'react-loading-skeleton';

function AssignmentsCardsSkeleton() {
    return (
        <div className='assignmentCards__skeleton'>
            <Skeleton width='97%' height='60%' style={{marginBottom: '20px'}} />
            <Skeleton width='80%'/>
        </div>
    )
}

export default AssignmentsCardsSkeleton
