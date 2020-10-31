import React from 'react';
// Experience and Elsewhere has all the classes same
import '../ExperienceModal/ExperienceModal.css';

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';


function ElsewhereModal({ openElsewhewe, setOpenElsewhewe }) {
    return (
        <Dialog className='elsewhere__modal' fullScreen open={openElsewhewe} onClose={() => setOpenElsewhewe(false)}>
            <div className='elsewhere__modal__header'>
                <h3>Edit Links</h3>
                <CloseIcon onClick={() => setOpenElsewhewe(false)} />
            </div>
            <div className='elsewhere__modal__form'>
                <form>
                    <label>Your Github URL <span>(optional)</span></label>
                    <input type='text' placeholder='https://www.scholarly-science.git' />
                    <label>Your Linkedin URL <span>(optional)</span></label>
                    <input type='text' placeholder='https://www.scholarly-science.com' />
                    <label>Your StackOverflow URL <span>(optional)</span></label>
                    <input type='text' placeholder='https://www.scholarly-science.com' />
                    <label>Your Personal Website <span>(optional)</span></label>
                    <input type='text' placeholder='https://www.scholarly-science.com'/>
                    <label>Your Passion Projects<span>(optional)</span></label>
                    <input type='text' placeholder='Worked on something you loved add a link'/>
                    <div className='elsewhere__button'>
                            <button type='button'>Cancel</button>
                            <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default ElsewhereModal
