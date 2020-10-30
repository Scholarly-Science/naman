import React, { useEffect, useState } from 'react';
import './NewProfile.css';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import github from '../../images/newProfile/github.svg';
import heart from '../../images/newProfile/heart.svg';
import linkedin from '../../images/newProfile/linkedin.svg';
import personal from '../../images/newProfile/personal-website.svg';
import CloseIcon from '@material-ui/icons/Close';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { roles, experience, skills, location, yearsfunc } from './NewProfileData';
import ExperienceModal from './ExperienceModal';
// Images
import expImg from '../../images/newProfile/exp-img.svg';
import PreferenceModal from './PreferenceModal/PreferenceModal';

function NewProfile() {
    const [open, setOpen] = useState(false);
    const [openRoles, setOpenRoles] = useState(false);
    // For opening the modal of Preferences
    const [openExp, setOpenExp] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openloc, setOpenloc] = useState(false);
    const [openElsewhewe, setOpenElsewhewe] = useState(false);
    // Years
    const [years, setYears] = useState([]);
    // Selected preferences are stored here
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedExp, setSelectedExp] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedLoc, setSelectedLoc] = useState([]);
    // Added Experiences are stored here
    const [addExperience, setAddExperience] = useState([]);

    useEffect(() => {
        setYears(yearsfunc());
    }, [])

    const openFile = () => {
        document.getElementById('file').click();
    } 

    const setRoles = ( role ) => {
        if(selectedRoles?.indexOf(role) !== -1) {
            const data = selectedRoles?.filter((d) => d !== role);
            setSelectedRoles(data);
        } else {
            if(selectedRoles.length < 7) {
                selectedRoles.push(role);
                setSelectedRoles([...selectedRoles]);
            }
        }
    }

    const setExperience = ( exp ) => {
        if(selectedExp?.indexOf(exp) !== -1) {
            const data = selectedExp?.filter((e) => e !== exp);
            setSelectedExp(data);
        } else {
            if(selectedExp.length < 7) {
                selectedExp.push(exp);
                setSelectedExp([...selectedExp]);
            }
        }
    }

    const setSkill = ( skill ) => {
        if(selectedSkills?.indexOf(skill) !== -1) {
            const data = selectedSkills?.filter((sk) => sk !== skill);
            setSelectedSkills(data);
        } else {
            if(selectedSkills.length < 7) {
                selectedSkills.push(skill);
                setSelectedSkills([...selectedSkills]);
            }
        }
    }

    const setLocation = ( loc ) => {
        if(selectedLoc?.indexOf(loc) !== -1) {
            const data = selectedLoc?.filter((l) => l !== loc);
            setSelectedLoc(data);
        } else {
            if(selectedLoc.length < 7) {
                selectedLoc.push(loc);
                setSelectedLoc([...selectedLoc]);
            }
        }
    }

    return (
        <div className='newProfile'>
            <div className='newProfile__container'>
                <section className='newProfile__left'>
                    <div className='newProfile__userBio'>
                        <Avatar alt='Akshay' src='jhcdbjbdcjf'></Avatar>
                        <div className='newProfile__userBio__info'>
                            <h4>Akshay Kumar</h4>
                            <h5>University, year</h5>
                            <p>Other, 2016</p>
                            <p>BA/BS in Biochemistry</p>
                            <button className='btn'>Edit Profile</button>
                        </div>
                    </div>

                    <div className='newProfile__experience' 
                        style={{
                            background: `${addExperience?.length > 0 && '#fff'}`, 
                            border: `${addExperience?.length > 0 && '1.5px solid #d9d9d9'}`,
                            marginBottom: `${addExperience?.length <= 0 ? '9px' : '15px'}`
                        }}
                    >
                        <h1>EXPERIENCE</h1>
                        {addExperience?.length > 0 ? (
                            <div className='experiences__card'>
                                {addExperience.map(exp => (
                                    <div>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSHDJ35rSeDJiqegz6fAWizKIx3X3xlK8Wgg&usqp=CAU' alt='google' />
                                        <div>
                                            <h2>{exp.title} - {exp.companyName}</h2>
                                            <h3>{`${exp.fromMonth} ${exp.fromYear}`} - {`${exp.toMonth} ${exp.toYear}`}</h3>
                                            <h4>{exp.location}</h4>
                                            <p>{exp.textarea || 'Description'}</p>
                                        </div>
                                        <CreateOutlinedIcon />
                                    </div>                                    
                                ))}
                                <button onClick={() => setOpen(true)}>+ Add Experience</button>
                            </div>
                                
                        ) : (
                            <div className='newProfile__experience__bg'>
                                <img src={expImg} alt='experience-img' />
                                <h3>Add your experience</h3>
                                <p>Stand out to recruiters by adding your past and upcoming experiences</p>
                                <button onClick={() => setOpen(true)} className='btn'>Add Experience</button>
                            </div>                          
                        )}
                        <ExperienceModal 
                            open={open} 
                            setOpen={setOpen} 
                            years={years}
                            addExperience={addExperience}
                        />
                    </div>

                    <div className='newProfile__resume'>
                        <h1>RESUME</h1>
                        <div>
                            <h3>Add your resume</h3>
                            <p>Your resume is essential for recruiters to learn more about you! Upload one as soon as possible to boost your chances of being discovered</p>
                            <button onClick={openFile} className='btn'>Add Resume</button>
                            <input type="file" id="file" name="file"/>
                        </div>
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
                        <div className='newProfile__preference'>
                            <div className='newProfile__role'>
                                <h2>
                                    Preferred roles
                                    <CreateOutlinedIcon onClick={() => setOpenRoles(true)} />
                                </h2>
                                    <PreferenceModal 
                                        pref={roles}
                                        open={openRoles}
                                        close={setOpenRoles}
                                        set={setRoles}
                                        heading='Edit My Interests'
                                        info='Which of these roles are you most interested in?'
                                        choose='Choose up to 7'
                                    />
                                {selectedRoles?.length > 0 ? (
                                    <div>
                                        {selectedRoles?.map(role => <p>{role}</p>)}
                                    </div>
                                ) : (<p>What are your roles</p>)}
                            </div>
                            <div className='newProfile__exp'>
                                <h2>
                                    Experience
                                    <CreateOutlinedIcon onClick={() => setOpenExp(true)} />
                                </h2>
                                    <PreferenceModal 
                                        pref={experience}
                                        open={openExp}
                                        close={setOpenExp}
                                        set={setExperience}
                                        heading='Edit My Background'
                                        info='What area have you had the most experience with?'
                                        choose='Choose up to 7'
                                    />
                                {selectedExp?.length > 0 ? (
                                    <div>
                                        {selectedExp?.map(role => <p>{role}</p>)}
                                    </div>
                                ) : (<p>What areas of experience do you have?</p>)}
                            </div>
                            <div className='newProfile__skill'>
                                <h2>
                                    Skills
                                    <CreateOutlinedIcon onClick={() => setOpenSkills(true)} />
                                </h2>
                                    <PreferenceModal 
                                        pref={skills}
                                        open={openSkills}
                                        close={setOpenSkills}
                                        set={setSkill}
                                        heading='Edit My Background'
                                        info='Rank your skills from the list below.'
                                        choose='Choose up to 7'
                                    />
                                {selectedSkills?.length > 0 ? (
                                    <div>
                                        {selectedSkills?.map(skill => <p>{skill}</p>)}
                                    </div>
                                ) : (<p>Rank your skills</p>)}
                            </div>
                            <div className='newProfile__loc'>
                                <h2>
                                    Preferred locations
                                    <CreateOutlinedIcon onClick={() => setOpenloc(true)} />
                                </h2>
                                    <PreferenceModal 
                                        pref={location}
                                        open={openloc}
                                        close={setOpenloc}
                                        set={setLocation}
                                        heading='Edit My Interests'
                                        info='Which location would you like to work in?'
                                        choose='Choose up to 7'
                                    />
                                {selectedLoc?.length > 0 ? (
                                    <div>
                                        {selectedLoc?.map(loc => <p>{loc}</p>)}
                                    </div>
                                ) : (<p>Where do you want to work?</p>)}
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
