import React, { useState } from 'react';
import '../ExperienceModal/ExperienceModal.css';
import './ProfileModal.css';
import { Formik } from 'formik';
import PhoneInput from "react-phone-input-2";

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

function ProfileModal({ openProfile ,setOpenProfile, setUserFirstName, setUserLastName, setAboutUser }) {
    const [phone, setPhone] = useState('');
    const [alternatephone, setAlternatePhone] = useState('');

    const save = (data) => {
        setUserFirstName(data.firstName);
        setUserLastName(data.lastName);
        setAboutUser(data.about);
        
        setOpenProfile(false);
    }

    return (
        <Dialog className='profile__modal' fullScreen open={openProfile} onClose={() => setOpenProfile(false)}>
            <div className='profile__modal__header'>
                <h3>Edit Profile</h3>
                <CloseIcon onClick={() => setOpenProfile(false)} />
            </div>
            <div className='profile__modal__form'>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        college: '',
                        email: '',
                        alternateEmail: '',
                        about: ''
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
                        <div className='profile__modal__form__fullname'>
                            <div>
                                <label>First Name</label>
                                <input type='text' placeholder='John' name='firstName' onChange={handleChange} value={values.firstName} />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type='text' placeholder='Smith' name='lastName' onChange={handleChange} value={values.lastName} />
                            </div>
                        </div>
                        <label>College/University</label>
                        <input type='text' placeholder='Enter Your College/University Name' name='college' onChange={handleChange} value={values.college} />
                        <label>Email Address</label>
                        <input type='email' placeholder='johnsmith@gmail.com' name='email' onChange={handleChange} value={values.email} />
                        <label>Alternate Email Address <span>(optional)</span></label>
                        <input type='email' placeholder='johnsmith@gmail.com' name='alternateEmail' onChange={handleChange} value={values.alternateEmail}/>
                        <div className='profile__modal__form__mobile'>
                            <div>
                                <label>Mobile Number</label>
                                <PhoneInput
                                    country='in'
                                    value={phone}
                                    onChange={(num) => setPhone(num)}
                                    countryCodeEditable={false}
                                    containerClass='profile__modal__container'
                                    inputClass='profile__modal__phoneInput'
                                    placeholder='99999 99999'
                                />
                            </div>
                            <div>
                                <label>Alternate Mobile Number <span style={{opacity: 0.6}}>(optional)</span></label>
                                <PhoneInput
                                    country='in'
                                    value={alternatephone}
                                    onChange={(num) => setAlternatePhone(num)}
                                    countryCodeEditable={false}
                                    containerClass='profile__modal__container'
                                    inputClass='profile__modal__phoneInput'
                                    placeholder='99999 99999'
                                />
                            </div>
                        </div>
                        <label>About Me <span>(optional)</span></label>
                        <textarea name='about' onChange={handleChange} value={values.about} />
                        <div className='profile__btn'>
                            <button type='button' onClick={() => setOpenProfile(false)}>Cancel</button>
                            <button type='submit'>Save</button>
                        </div>
                    </form>    
                    )}
                </Formik>
            </div>
        </Dialog>
    )
}

export default ProfileModal
