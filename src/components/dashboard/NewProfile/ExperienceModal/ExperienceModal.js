import React, { useState } from 'react';
import './ExperienceModal.css';
import TextEditor from '../TextEditor/TextEditor';
import { Formik } from 'formik';

import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { months } from '../NewProfileData';
import InputSearch from '../InputSearch';

function ExperienceModal({ open, setOpen, years, addExperience }) {
    const [checked, setChecked] = useState(false);
    const [checkedTo, setCheckedTo] = useState(false);
    const [loading, setLoading] = useState(false);

    const cancel = (e) => {
        e.preventDefault();
        setOpen(false);
    }

    const save = (data) => {
        addExperience.push(data);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 2000);
    }

    return (
        <div>
            <Dialog className='experience__modal' fullScreen open={open} onClose={() => setOpen(false)}>
                <div className='experience__modal__header'>
                    <h3>Add Experience</h3>
                    <CloseIcon onClick={() => setOpen(false)} />
                </div>
                <div className='experience__modal__form'>
                    <Formik
                        initialValues={{
                            companyName: '',
                            website: '',
                            title: '',
                            location: '',
                            fromMonth: '',
                            fromYear: '',
                            toMonth: '',
                            toYear: '',
                            textarea: ''
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
                                <label>Company / Organization Name</label>
                                <InputSearch name='companyName' />
                                <label>Website</label>
                                <input type='text' name='website' onChange={handleChange} value={values.website} placeholder='https://www.scholarly-science.com' />
                                <label>Title</label>
                                <input type='text' name='title' onChange={handleChange} value={values.title} placeholder='Example: Software Engineer' />
                                <label>Location {checked && <span>(optional)</span>} </label>
                                <input type='text' name='location' onChange={handleChange} value={values.location} placeholder='Add a location' disabled={checked}/>
                                <div className='experience__modal__form__checkbox'>
                                    <Checkbox 
                                        color='primary'
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    <p>Worked Remotely</p>
                                </div>
                                <label>From</label>
                                <div>
                                    <select className='select__month mr' name='fromMonth' onChange={handleChange}>
                                        <option value="">Select...</option>
                                        {months?.map(month => <option value={month}>{month}</option>)}
                                    </select>
                                    <select className='select__month' name='fromYear' onChange={handleChange}>
                                        <option value="">Select...</option>
                                        {years?.map(year => <option value={year} >{year}</option>)}
                                    </select>
                                </div>
                                {!checkedTo && <label>To</label>}
                                <div>
                                    <select className='select__month mr' name='toMonth' onChange={handleChange} disabled={checkedTo}>
                                        <option value="">Select...</option>
                                        {months?.map(month => <option value={month}>{month}</option>)}
                                    </select>
                                    <select className='select__month' name='toYear' onChange={handleChange}  disabled={checkedTo}>
                                        <option value="">Select...</option>
                                        {years?.map(year => <option value={year} >{year}</option>)}
                                    </select>
                                </div>
                                <div className='experience__modal__form__checkbox'>
                                    <Checkbox 
                                        color='primary'
                                        checked={checkedTo}
                                        onChange={() => setCheckedTo(!checkedTo)}
                                    />
                                    <p>I currently work here</p>
                                </div>
                                <label>Description <span>(optional)</span></label>
                                <div>
                                    <TextEditor name='textarea' value={values.textarea}  onChange={handleChange} />
                                </div>
                                <div className='experience__button'>
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
        </div>
    )
}

export default ExperienceModal
