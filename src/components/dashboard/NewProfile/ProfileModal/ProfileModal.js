import React, { useState } from 'react';
import '../ExperienceModal/ExperienceModal.css';
import './ProfileModal.css';
import PhoneInput from "react-phone-input-2";

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

function ProfileModal({ openProfile ,setOpenProfile }) {
    const [phone, setPhone] = useState('');

    console.log(phone);

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
                    <label>School<span>(optional)</span></label>
                    <input type='text' placeholder='Enter Your School' />
                    <label>Personalize your URL <span>(optional)</span></label>
                    <input type='text' placeholder='john-smith' />
                    <label>Email Address</label>
                    <input type='email' placeholder='johnsmith@gmail.com'/>
                    <label>Phone Number <span>(optional)</span></label>
                    <PhoneInput
                        country='in'
                        value={phone}
                        onChange={(num) => setPhone(num)}
                        countryCodeEditable={false}
                        containerClass='profile__modal__container'
                        inputClass='profile__modal__phoneInput'
                    />
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
