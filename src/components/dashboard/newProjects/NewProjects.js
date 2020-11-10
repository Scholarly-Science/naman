import React, { useEffect } from 'react';
import './NewProject.css';
import TextTruncate from 'react-text-truncate';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { projects } from '../Projects/Projects';

function NewProjects() {
    return (
        <div className='newProjects'>
            <section className='newProjects__section'>
                <h2>Projects by Companies</h2>
                <div className='newProjects__container'>
                    {projects.map(project => (
                        <div className='newProjects__card'>
                            <div className='newProjects__Info'>
                                <img src={project.image} alt={project.title} />
                                <h4>{project.title}</h4>
                                <div className='newProjects__truncate'>
                                    <TextTruncate
                                        line={3}
                                        element="span"
                                        truncateText="…"
                                        text='CRED is an app, which gives you rewards on timely payments of your credit card payment it is also equipped with the cred to protect nuance of a credit card payment journey – right from due date reminders, spending patterns and other card usage statistics'
                                    />
                                </div>
                            </div>
                            <div className='newProjects__buttons'>
                                <button className='newProjects__buttons__save'><BookmarkBorderIcon /> Save</button>
                                <button className='newProjects__buttons__load'>Load More</button>
                            </div>
                        </div>                    
                    ))}
                </div>
            </section>
        </div>
    )
}

export default NewProjects
