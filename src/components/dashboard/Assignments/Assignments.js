import React, { useEffect, useState } from 'react';
import './Assignments.css';
import AssignmentCards from './AssignmentCards';
import Pagination from '@material-ui/lab/Pagination';
import InfiniteScroll from 'react-infinite-scroll-component';

import AcctountManager from '../../images/assignment-Cards/cards_Account manager.svg';
import AndroidDeveloper from '../../images/assignment-Cards/cards_Android developer.svg';
import BasicExcel from '../../images/assignment-Cards/cards_Basic Excel test.svg';
import ColdCall from '../../images/assignment-Cards/cards_Cold call skills .svg';
import CommunityManager from '../../images/assignment-Cards/cards_Community manager.svg';
import ContentWriter from '../../images/assignment-Cards/cards_Conternt writer- Entry level.svg';
import DataAnalyst from '../../images/assignment-Cards/cards_Data analyst.svg';
import DataScientist from '../../images/assignment-Cards/cards_Data Scientist.svg';
import DigitalProductDesigner from '../../images/assignment-Cards/cards_Digital product designer.svg';
import EntpSpirit from '../../images/assignment-Cards/cards_Entrepreneurial spirit.svg';
import FinancialManager from '../../images/assignment-Cards/cards_Financial manager.svg';
import GrammarCopy from '../../images/assignment-Cards/cards_Grammar-copywriting.svg';
import GrowthMaker from '../../images/assignment-Cards/cards_Growth maker.svg';
import JuniorEditor from '../../images/assignment-Cards/cards_Junior Editor.svg';
import leadership from '../../images/assignment-Cards/cards_Leadership and soft skills.svg';
import Marketing from '../../images/assignment-Cards/cards_Marketing intern.svg';
import Mechanical from '../../images/assignment-Cards/cards_Mechanical Engineer.svg';
import ModernAccounting from '../../images/assignment-Cards/cards_Modern Accounting.svg';
import CommunicationSkills from '../../images/assignment-Cards/cards_ommunication Skills.svg';
import OperationAnalyst from '../../images/assignment-Cards/cards_Operation analyst.svg';
import English from '../../images/assignment-Cards/cards_Proficiency in English.svg';
import French from '../../images/assignment-Cards/cards_Proficiency in French.svg';
import SalesExecutive from '../../images/assignment-Cards/cards_Sales executive.svg';
import SEOWebCopywriter from '../../images/assignment-Cards/cards_SEO Web Copywriter.svg';
import SocoalMediamarketing from '../../images/assignment-Cards/cards_Socoal media marketing.svg';
import SoftwareTestingAndDebugging from '../../images/assignment-Cards/cards_Software testing and debugging.svg';
import TalentAcquisition from '../../images/assignment-Cards/cards_Talent acquisition.svg';
import UI from '../../images/assignment-Cards/cards_UI Designer.svg';
import UX from '../../images/assignment-Cards/cards_UX researcher.svg';
import AssignmentsCardsSkeleton from './AssignmentsCardsSkeleton';

function Assignments() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    // For 1080px
    const [initial1080, setInitial1080] = useState(0);
    const [limit1080, setLimit1080] = useState(24);
    // For 900px
    const [initial900, setInitial900] = useState(0);
    const [limit900, setLimit900] = useState(20);
    // For 750px
    const [initial750, setInitial750] = useState(0);
    const [limit750, setLimit750] = useState(16);
    // For less than 750px
    const [initialBasic, setInitialBasic] = useState(0);
    const [limitBasic, setLimitBasic] = useState(12);
    // For mobile view

    const handleChange1080 = (event, value) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setPage(value);
        if(value === 1) {
            setInitial1080(0);
            setLimit1080(24);
        } else {
            setLimit1080(value * 24);
            setInitial1080((value * 24) - 24);
        }
    };

    const handleChange900 = (event, value) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setPage(value);
        if(value === 1) {
            setInitial900(0);
            setLimit900(20);
        } else {
            setLimit900(value * 20);
            setInitial900((value * 20) - 20);
        }
    };

    const handleChange750 = (event, value) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setPage(value);
        if(value === 1) {
            setInitial750(0);
            setLimit750(16);
        } else {
            setLimit750(value * 16);
            setInitial750((value * 16) - 16);
        }
    };

    const handleChangeBasic = (event, value) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setPage(value);
        if(value === 1) {
            setInitialBasic(0);
            setLimitBasic(12);
        } else {
            setLimitBasic(value * 12);
            setInitialBasic((value * 12) - 12);
        }
    };

    if(window.innerWidth <= 540) {
        return (
            <div className='assignments__mobile'>
                <div className='assignments__mobile__container'>
                    <div className='assignments__mobile__cards'>
                        <h3 style={{marginTop: 0}}>Accounting and Finance</h3>
                        <div className='assignments__mobile__cardsFlex'>
                            <AssignmentCards image={AcctountManager} label='Account Manager' />
                            <AssignmentCards image={ModernAccounting} label='Modern Accounting' />
                            <AssignmentCards image={AcctountManager} label='Finance Manager' />                    
                        </div>
                    </div>
                    <div className='assignments__mobile__cards'>
                        <h3>User Experience</h3>
                        <div className='assignments__mobile__cardsFlex'>
                            <AssignmentCards image={DigitalProductDesigner} label='Digital Product Designer' />
                            <AssignmentCards image={UI} label='UI Designer' />
                            <AssignmentCards image={UX} label='UX Researcher' />                    
                        </div>
                    </div>
                    <div className='assignments__mobile__cards'>
                        <h3>Data Science and Machine Learning</h3>
                        <div className='assignments__mobile__cardsFlex'>
                            <AssignmentCards image={DataScientist} label='Data Scientist' />
                            <AssignmentCards image={DataAnalyst} label='Data Analyst' />
                        </div>
                    </div>
                    <div className='assignments__mobile__cards'>
                        <h3>Language Proficiency</h3>
                        <div className='assignments__mobile__cardsFlex'>
                            <AssignmentCards image={English} label='Proficiency in English' />
                            <AssignmentCards image={French} label='Proficiency in French  ' />
                            <AssignmentCards image={CommunicationSkills} label='Communication Skills' />                    
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (window.innerHeight < 750) {
        return (
            <div className='assignments'>
                <ul className='assignments__cards'>
                    {cardsData.slice(initialBasic, limitBasic).map(card => loading ? <AssignmentsCardsSkeleton key={card.text}/> : (
                        <li key={card.text}><AssignmentCards image={card.img} label={card.text} /></li>
                    )
                    )}
                </ul>     
                <Pagination 
                    className='pagination' 
                    count={Math.ceil(cardsData.length / 12)} 
                    color="primary" 
                    page={page} 
                    onChange={handleChangeBasic} 
                />
            </div> 
        )
    } else if(window.innerHeight >= 750 && window.innerHeight < 900) {
        return (        
            <div className='assignments'>
                <ul className='assignments__cards'>
                    {cardsData.slice(initial750, limit750).map(card => loading ? <AssignmentsCardsSkeleton key={card.text}/> : (
                        <li key={card.text}><AssignmentCards image={card.img} label={card.text} /></li>
                    )
                    )}
                </ul>     
                <Pagination 
                    className='pagination' 
                    count={Math.ceil(cardsData.length / 16)} 
                    color="primary" 
                    page={page} 
                    onChange={handleChange750} 
                />
            </div>
        )
    } else if (window.innerHeight >= 900 && window.innerHeight < 1080) {
        return (        
            <div className='assignments'>
                <ul className='assignments__cards'>
                    {cardsData.slice(initial900, limit900).map(card => loading ? <AssignmentsCardsSkeleton key={card.text}/> : (
                        <li key={card.text}><AssignmentCards image={card.img} label={card.text} /></li>
                    )
                    )}
                </ul>     
                <Pagination 
                    className='pagination' 
                    count={Math.ceil(cardsData.length / 20)} 
                    color="primary" 
                    page={page} 
                    onChange={handleChange900} 
                />
            </div>
        )
    } else if (window.innerHeight >= 1080){
        return (
            <div className='assignments'>
                <ul className='assignments__cards'>
                    {cardsData.slice(initial1080, limit1080).map(card => loading ? <AssignmentsCardsSkeleton key={card.text}/> : (
                        <li key={card.text}><AssignmentCards image={card.img} label={card.text} /></li>
                    )
                    )}
                </ul>     
                <Pagination 
                    className='pagination' 
                    count={Math.ceil(cardsData.length / 24)} 
                    color="primary" 
                    page={page} 
                    onChange={handleChange1080} 
                />
            </div>
        )
    }
}

const cardsData = [
    {img: AcctountManager, text: 'Account Manager'},
    {img: AndroidDeveloper, text: 'Android Developer'},
    {img: BasicExcel, text: 'Basic Excel'},
    {img: ColdCall, text: 'Cold Call Skills'},
    {img: CommunityManager, text: 'Community Manager'},
    {img: ContentWriter, text: 'Content Writer'},
    {img: DataAnalyst, text: 'Data Analyst'},
    {img: DataScientist, text: 'Data Scientist'},
    {img: DigitalProductDesigner, text: 'Digital Product designer'},
    {img: EntpSpirit, text: 'Entrepreneurial Spirit'},
    {img: FinancialManager, text: 'Financial Manager'},
    {img: GrammarCopy, text: 'Grammar Copywritring'},
    {img: GrowthMaker, text: 'Growth Maker'},
    {img: JuniorEditor, text: 'Junior Editor'},
    {img: leadership, text: 'Leadership and soft skills'},
    {img: Marketing, text: 'Marketing intern'},
    {img: Mechanical, text: 'Mechanical Engineer'},
    {img: ModernAccounting, text: 'Modern Accounting'},
    {img: CommunicationSkills, text: 'Communication Skills'},
    {img: OperationAnalyst, text: 'Operation Analyst'},
    {img: English, text: 'Proficiency in English'},
    {img: French, text: 'Proficiency in French'},
    {img: SalesExecutive, text: 'Sales Executive'},
    {img: SEOWebCopywriter, text: 'SEO Web Copywriter'},
    {img: SocoalMediamarketing, text: 'Socoal Media Marketing'},
    {img: SoftwareTestingAndDebugging, text: 'Software Testing And Debugging'},
    {img: TalentAcquisition, text: 'Talent Acquisition'},
    {img: UI, text: 'UI Design'},
    {img: UX, text: 'UX Researcher'},
];

export default Assignments
