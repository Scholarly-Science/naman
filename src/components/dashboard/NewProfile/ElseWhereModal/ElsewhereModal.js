import React, { useState } from 'react';
// Experience and Elsewhere has all the classes same
import '../ExperienceModal/ExperienceModal.css';

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { Formik } from 'formik';

function ElsewhereModal({ 
    openElsewhewe, setOpenElsewhewe, setPersonalWebsite, setLinkedinURL, 
    setPassionProject, setGithubURL, setLine, setWeChat,
    personalWebsite, linkedinURL, passionProject, githubURL, line, weChat 
}) {
    const [loading, setLoading] = useState(false);

    const cancel = (e) => {
        e.preventDefault();
        setOpenElsewhewe(false);
    }

    const save = (data) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenElsewhewe(false);
        }, 2000);
        
        setPersonalWebsite(data.personalWebsite);
        setLinkedinURL(data.linkedin);
        setPassionProject(data.passion);
        setGithubURL(data.github);
        setLine(data.line);
        setWeChat(data.weChat);
    }

    return (
        <Dialog className='elsewhere__modal' fullScreen open={openElsewhewe} onClose={() => setOpenElsewhewe(false)}>
            <div className='elsewhere__modal__header'>
                <h3>Edit Links</h3>
                <CloseIcon onClick={() => setOpenElsewhewe(false)} />
            </div>
            <div className='elsewhere__modal__form'>
            <Formik
                initialValues={{
                    github: githubURL,
                    linkedin: linkedinURL,
                    weChat: weChat,
                    personalWebsite: personalWebsite,
                    passion: passionProject,
                    line: line,
                }}
                onSubmit={(data) => save(data)}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label>Linkedin URL <span>(optional)</span></label>
                        <input type='text' name='linkedin' onChange={handleChange} value={values.linkedin} placeholder='https://www.scholarly-science.com' />
                        <label>Github URL <span>(optional)</span></label>
                        <input type='text' name='github' onChange={handleChange} value={values.github} placeholder='https://www.scholarly-science.git' />
                        <label>Line ID <span>(optional)</span></label>
                        <input type='text' name='line' onChange={handleChange} value={values.line} placeholder='Worked on something you loved add a link'/>
                        <label>WeChat ID <span>(optional)</span></label>
                        <input type='text' name='weChat' onChange={handleChange} value={values.weChat} placeholder='https://www.scholarly-science.com' />
                        <label>Personal Website <span>(optional)</span></label>
                        <input type='text' name='personalWebsite' onChange={handleChange} value={values.personalWebsite} placeholder='https://www.scholarly-science.com'/>
                        <label>Passion Projects <span>(optional)</span></label>
                        <input type='text' name='passion' onChange={handleChange} value={values.passion} placeholder='Worked on something you loved add a link'/>
                        <div className='elsewhere__button'>
                            <button type='button' onClick={cancel}>Cancel</button>
                            <button disabled={loading} type='submit'>
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            </div>
        </Dialog>
    )
}

export default ElsewhereModal
