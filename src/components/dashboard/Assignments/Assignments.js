import React, { useState } from 'react';
import AssignmentCards from './AssignmentCards';
import './Assignments.css';
import Pagination from '@material-ui/lab/Pagination';

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
    const [initial, setInitial] = useState(0);
    const [limit, setLimit] = useState(12);

    const handleChange = (event, value) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setPage(value);
        if(value === 1) {
            setInitial(0);
            setLimit(12);
        } else {
            setLimit(value * 12);
            setInitial((value * 12) - 12);
        }
    };
    
    return (
        <div className='assignments'>
            <ul className='assignments__cards'>
                {cardsData.slice(initial, limit).map(card => loading ? <AssignmentsCardsSkeleton /> : (
                    <li><AssignmentCards image={card.img} label={card.text} /></li>
                )
                )}
            </ul>            
            <Pagination 
                className='pagination' 
                count={Math.ceil(cardsData.length / 12)} 
                color="primary" 
                page={page} 
                onChange={handleChange} 
            />
        </div>
    )
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
