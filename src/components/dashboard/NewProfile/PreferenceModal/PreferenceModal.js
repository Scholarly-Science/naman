import React from 'react';
import './PreferenceModal.css';

import { Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function PreferenceModal({ pref, open, close, set, heading, info, choose }) {
    return (
        <div>
            <Dialog className='preference__modal' fullScreen open={open} onClose={() => close(false)}>
                <div className='preference__modal__container'>
                    <div className='preference__modal__header'>
                        <CloseIcon onClick={() => close(false)} />
                        <button>Save</button>
                    </div>
                    <div className='preference__modal__roles'>
                        <h2>{heading}</h2>
                        <div className='preference__modal__roles__info'>
                            <h5>{info}</h5>
                            <p>{choose}</p>
                        </div>
                        <div className='preference__modal__roles__role'>
                            {pref?.map(pref => <p onClick={() => set(pref)}>{pref}</p>)}
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default PreferenceModal
