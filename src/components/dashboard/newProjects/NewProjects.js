import React, { useEffect, useState } from 'react';
import './NewProject.css';
import { projects } from '../Projects/Projects';
import NewProjectsSkeleton from './NewProjectsSkeleton';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

function NewProjects() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);    
    }, [])

    return (
        <div className='newProjects'>
            <section className='newProjects__section'>                
                <div className='newProjects__container'>
                    {projects.map(project => (
                        <div className='newProjects__card' key={project.title}>
                            {loading ? <NewProjectsSkeleton /> : (
                                <div className='newProjects__Info'>
                                    <span className='newProjects__Info__hide'><QueryBuilderIcon />Be an early applicant</span>
                                    <img src={project.image} alt={project.title} />
                                    <h4>{project.title}</h4>                                
                                </div>
                            )}
                        </div>                    
                    ))}
                </div>
            </section>
        </div>
    )
}

export default NewProjects
