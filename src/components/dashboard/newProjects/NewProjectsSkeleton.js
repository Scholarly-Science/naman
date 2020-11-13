import React from 'react';
import './NewProject.css';
import Skeleton from 'react-loading-skeleton';

function NewProjectsSkeleton() {
    return (
        <div className='newProjects__card__skeleton'>
            <Skeleton circle={true} width='70px' height='70px' style={{marginBottom: '15px'}} />
            <Skeleton width='80%' height='20px' />
        </div>
    )
}

export default NewProjectsSkeleton
