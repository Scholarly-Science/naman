import React from 'react';
import AssignmentCards from './AssignmentCards';
import './Assignments.css';
import CommunityManager from '../../images/assignment-Cards/community manager.svg';
import ContentWriter from '../../images/assignment-Cards/content writer.svg';
import EventManager from '../../images/assignment-Cards/event manager.svg';
import JuniorEditor from '../../images/assignment-Cards/junior editor.svg';
import MechanicalEngineer from '../../images/assignment-Cards/mechanical engineer.svg';
import English from '../../images/assignment-Cards/proficiency in english.svg';
import French from '../../images/assignment-Cards/proficiency in french.svg';
import UX from '../../images/assignment-Cards/UX researcher.svg';

function Assignments() {
    return (
        <div className='assignments'>
            <div className='assignments__cards'>
                <AssignmentCards image={CommunityManager} label='Community Manager' />
                <AssignmentCards image={ContentWriter} label='Content Writer' />
                <AssignmentCards image={EventManager} label='Event Manager' />
                <AssignmentCards image={JuniorEditor} label='junior Editor' />
                <AssignmentCards image={MechanicalEngineer} label='Mechanical Engineer' />
                <AssignmentCards image={English} label='Proficiency in English' />
                <AssignmentCards image={French} label='Proficiency in French' />
                <AssignmentCards image={UX} label='UX Researcher' />
                <AssignmentCards image={CommunityManager} label='CommunityManager' />
                <AssignmentCards image={CommunityManager} label='CommunityManager' />
                <AssignmentCards image={CommunityManager} label='CommunityManager' />
                <AssignmentCards image={CommunityManager} label='CommunityManager' />
            </div>
        </div>
    )
}

export default Assignments
