import React, { useEffect, useState } from 'react';
import './NewProfile.css';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import github from '../../images/newProfile/github.svg';
import heart from '../../images/newProfile/heart.svg';
import linkedin from '../../images/newProfile/linkedin.svg';
import personal from '../../images/newProfile/personal-website.svg';
import CloseIcon from '@material-ui/icons/Close';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { roles, experience, skills, location, months, yearsfunc } from './NewProfileData';

function NewProfile() {
    const [open, setOpen] = useState(false);
    const [openRoles, setOpenRoles] = useState(false);
    const [openExp, setOpenExp] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openloc, setOpenloc] = useState(false);
    const [openElsewhewe, setOpenElsewhewe] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkedTo, setCheckedTo] = useState(false);
    const [years, setYears] = useState([]);

    useEffect(() => {
        setYears(yearsfunc());
    }, [])

    const openFile = () => {
        document.getElementById('file').click();
    }

    return (
        <div className='newProfile'>
            <div className='newProfile__container'>
                <section className='newProfile__left'>
                    <div className='newProfile__userBio'>
                        <Avatar alt='Akshay' src='jhcdbjbdcjf'></Avatar>
                        <div className='newProfile__userBio__info'>
                            <h4>Akshay Kumar</h4>
                            <p>Other, 2016</p>
                            <p>BA/BS in Biochemistry</p>
                        </div>
                    </div>

                    <div className='newProfile__experience'>
                        <h1>Experiences</h1>
                        <div className='newProfile__card'>
                            <p>Stand out to recruiters by adding your experience</p>
                            <button onClick={() => setOpen(true)}>+ Add Experience</button>
                        </div>
                        <Dialog className='newProfile__experience__modal' fullScreen open={open} onClose={() => setOpen(false)}>
                            <div className='experience__modal__header'>
                                <h3>Add Experience</h3>
                                <CloseIcon onClick={() => setOpen(false)} />
                            </div>
                            <div className='experience__modal__form'>
                                <form>
                                    <label>Company / Organization Name</label>
                                    <input type='text' placeholder='Example: Google or Code2040' />
                                    <label>Website</label>
                                    <input type='text' placeholder='https://www.scholarly-science.com' />
                                    <label>Title</label>
                                    <input type='text' placeholder='Example: Software Engineer' />
                                    <label>Location {checked && <span>(optional)</span>} </label>
                                    <input type='text' placeholder='Add a location' disabled={checked}/>
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
                                        <select className='select__month margin'>
                                            <option value="">Select...</option>
                                            {months?.map(month => <option value={month}>{month}</option>)}
                                        </select>
                                        <select className='select__month'>
                                            <option value="">Select...</option>
                                            {years?.map(year => <option value={year} >{year}</option>)}
                                        </select>
                                    </div>
                                    {!checkedTo && <label>To</label>}
                                    <div>
                                        <select className='select__month margin' disabled={checkedTo}>
                                            <option value="">Select...</option>
                                            {months?.map(month => <option value={month}>{month}</option>)}
                                        </select>
                                        <select className='select__month' disabled={checkedTo}>
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
                                    <div className='experience__modal__form__textarea'>
                                        <textarea 
                                            placeholder='one or two sentences explaining your role.' 
                                        />
                                    </div>
                                    <div className='experience__button'>
                                        <button>Cancel</button>
                                        <button>Save</button>
                                    </div>
                                </form>
                            </div>
                        </Dialog>
                    </div>

                    <div className='newProfile__education'>
                        <h1>Education</h1>
                        <div>
                            <DesktopWindowsIcon />
                            <div className='newProfile__education__info'>
                                <h4>Other</h4>
                                <p>BA/BS, Biochemistry & Data Science</p>
                                <span>2016</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='newProfile__right'>
                    <div>
                        <div className='newProfile__resume'>
                            <h1>Resume</h1>
                            <div className='newProfile__card'>
                                <p>
                                    You’re more likely to get reached out to if you have a resume! Only recruiters will be able to see your resume. 
                                </p>
                                <button onClick={openFile}>+ Add Resume</button>
                                <input type="file" id="file" name="file"/>
                            </div>
                        </div>

                        <div className='newProfile__preference'>
                            <div className='newProfile__role'>
                                <h2>
                                    Preferred roles
                                    <CreateOutlinedIcon onClick={() => setOpenRoles(true)} />
                                    <Dialog className='newProfile__preference__modal' fullScreen open={openRoles} onClose={() => setOpenRoles(false)}>
                                        <div className='newProfile__preference__modal__container'>
                                            <div className='preference__modal__header'>
                                                <CloseIcon onClick={() => setOpenRoles(false)} />
                                                <button>Save</button>
                                            </div>
                                            <h2>Edit My Interests</h2>
                                            <div className='dialog__roles'>
                                                <div className='dialog__roles__info'>
                                                    <h5>Which of these roles are you most interested in?</h5>
                                                    <p>Choose up to 4</p>
                                                </div>
                                                <div className='dialog__roles__role'>
                                                    {roles?.map(role => <p>{role}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </h2>
                                <p>What are your roles</p>
                            </div>
                            <div className='newProfile__exp'>
                                <h2>
                                    Experience
                                    <CreateOutlinedIcon onClick={() => setOpenExp(true)} />
                                    <Dialog className='newProfile__preference__modal' fullScreen open={openExp} onClose={() => setOpenExp(false)}>
                                    <   div className='newProfile__preference__modal__container'>
                                            <div className='preference__modal__header'>
                                                <CloseIcon onClick={() => setOpenExp(false)} />
                                                <button>Save</button>
                                            </div>
                                            <h2>Edit My Background</h2>
                                            <div className='dialog__roles'>
                                                <div className='dialog__roles__info'>
                                                    <h5>What area have you had the most experience with?</h5>
                                                    <p>Choose up to 4</p>
                                                </div>
                                                <div className='dialog__roles__role'>
                                                    {experience?.map(role => <p>{role}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </h2>
                                <p>What areas of experience do you have?</p>
                            </div>
                            <div className='newProfile__skill'>
                                <h2>
                                    Skills
                                    <CreateOutlinedIcon onClick={() => setOpenSkills(true)} />
                                    <Dialog className='newProfile__preference__modal' fullScreen open={openSkills} onClose={() => setOpenSkills(false)}>
                                    <   div className='newProfile__preference__modal__container'>
                                            <div className='preference__modal__header'>
                                                <CloseIcon onClick={() => setOpenSkills(false)} />
                                                <button>Save</button>
                                            </div>
                                            <h2>Edit My Background</h2>
                                            <div className='dialog__roles'>
                                                <div className='dialog__roles__info'>
                                                    <h5>Rank your skills from the list below.</h5>
                                                    <p>Choose up to 5</p>
                                                </div>
                                                <div className='dialog__roles__role'>
                                                    {skills?.map(role => <p>{role}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </h2>
                                <p>Rank your skills</p>
                            </div>
                            <div className='newProfile__loc'>
                                <h2>
                                    Preferred locations
                                    <CreateOutlinedIcon onClick={() => setOpenloc(true)} />
                                    <Dialog className='newProfile__preference__modal' fullScreen open={openloc} onClose={() => setOpenloc(false)}>
                                    <   div className='newProfile__preference__modal__container'>
                                            <div className='preference__modal__header'>
                                                <CloseIcon onClick={() => setOpenloc(false)} />
                                                <button>Save</button>
                                            </div>
                                            <h2>Edit My Interests</h2>
                                            <div className='dialog__roles'>
                                                <div className='dialog__roles__info'>
                                                    <h5>Which location would you like to work in?</h5>
                                                    <p>Choose all that apply</p>
                                                </div>
                                                <div className='dialog__roles__role'>
                                                    {location?.map(role => <p>{role}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </h2>
                                <p>Where do you want to work?</p>
                            </div>
                        </div>
                    </div>

                    <div className='newProfile__right__elsewhere'>
                        <h1>
                            Elsewhere
                            <CreateOutlinedIcon onClick={() => setOpenElsewhewe(true)} />
                        </h1>
                        <Dialog className='newProfile__experience__modal' fullScreen open={openElsewhewe} onClose={() => setOpenElsewhewe(false)}>
                            <div className='experience__modal__header'>
                                <h3>Edit Links</h3>
                                <CloseIcon onClick={() => setOpenElsewhewe(false)} />
                            </div>
                            <div className='experience__modal__form'>
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
                                    <div className='experience__button'>
                                        <button>Cancel</button>
                                        <button>Save</button>
                                    </div>
                                </form>
                            </div>
                        </Dialog>
                        <p>
                            <img src={personal} alt='personal' />
                            Add Website
                        </p>
                        <p>
                            <img src={linkedin} alt='linkedin' />
                            Add Linkedin
                        </p>
                        <p>
                            <img src={heart} alt='heart' />
                            Add Passion Project
                        </p>
                        <p>
                            <img src={github} alt='github' />
                            Add Github
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NewProfile
