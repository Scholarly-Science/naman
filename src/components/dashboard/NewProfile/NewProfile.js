import React from 'react';
import './NewProfile.css';
import Avatar from '@material-ui/core/Avatar';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import github from '../../images/newProfile/github.svg';
import heart from '../../images/newProfile/heart.svg';
import linkedin from '../../images/newProfile/linkedin.svg';
import personal from '../../images/newProfile/personal-website.svg';

function NewProfile() {
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
                            <button>+ Add Experience</button>
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
                        <div className='newProfile__resume'>
                            <h1>Resume</h1>
                            <div className='newProfile__card'>
                                <p>
                                    You’re more likely to get reached out to if you have a resume! Only recruiters will be able to see your resume. 
                                </p>
                                <button>+ Add Resume</button>
                            </div>
                        </div>

                        <div className='newProfile__preference'>
                            <div className='newProfile__role'>
                                <h2>Preferred roles</h2>
                                <p>What are your roles</p>
                            </div>
                            <div className='newProfile__exp'>
                                <h2>Experience</h2>
                                <p>What areas of experience do you have?</p>
                            </div>
                            <div className='newProfile__skill'>
                                <h2>Skills</h2>
                                <p>Rank your skills</p>
                            </div>
                            <div className='newProfile__loc'>
                                <h2>Preferred locations</h2>
                                <p>Where do you want to work?</p>
                            </div>
                        </div>
                    </div>

                    <div className='newProfile__right__elsewhere'>
                        <h1>Elsewhere</h1>
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
