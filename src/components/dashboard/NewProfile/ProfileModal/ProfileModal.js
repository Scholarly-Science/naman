import React, { useState } from 'react';
import '../ExperienceModal/ExperienceModal.css';
import './ProfileModal.css';
import PhoneInput from "react-phone-input-2";

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

function ProfileModal({ openProfile ,setOpenProfile }) {
    const [phone, setPhone] = useState('');
    const [alternatephone, setAlternatePhone] = useState('');

    return (
        <Dialog className='profile__modal' fullScreen open={openProfile} onClose={() => setOpenProfile(false)}>
            <div className='profile__modal__header'>
                <h3>Edit Profile</h3>
                <CloseIcon onClick={() => setOpenProfile(false)} />
            </div>
            <div className='profile__modal__form'>
                <form>
                    <div className='profile__modal__form__fullname'>
                        <div>
                            <label>First Name</label>
                            <input type='text' placeholder='John' />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input type='text' placeholder='Smith' />
                        </div>
                    </div>
                    <label>College/University</label>
                    <input type='text' placeholder='Enter Your College/University Name' />
                    <label>Email Address</label>
                    <input type='email' placeholder='johnsmith@gmail.com' />
                    <label>Alternate Email Address <span>(optional)</span></label>
                    <input type='email' placeholder='johnsmith@gmail.com'/>
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
                    <textarea />
                    <div className='profile__btn'>
                            <button type='button'>Cancel</button>
                            <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default ProfileModal
