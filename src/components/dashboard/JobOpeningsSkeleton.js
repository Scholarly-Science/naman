import React from 'react'
import './JobOpeningsSkeleton.css'
import Skeleton from 'react-loading-skeleton';

function JobOpeningsSkeleton() {
    return (
        <div style={{ padding: '.9rem' }}>
            <Skeleton height={60} width={60} className='JobOpeningsSkeleton_logo' />
            {
                window.innerWidth <= 414 ? 
                    <Skeleton height={25} width={'95%'} className='JobOpeningsSkeleton_info' /> :
                    <Skeleton height={30} width={'95%'} className='JobOpeningsSkeleton_info' />
            }
            <Skeleton width={'65%'}/>
        </div>
    )
}

export default JobOpeningsSkeleton
