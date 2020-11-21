import React, { useState } from 'react';
import './Assignments.css';
import AssignmentCards from './AssignmentCards';
import Pagination from '@material-ui/lab/Pagination';
import AssignmentsCardsSkeleton from './AssignmentsCardsSkeleton';
import { cardsData, AandF, UE, DSML, LP, SD, ENTP, Market, HR, CW, Other, mobile } from './AssignmentsData';

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

    if(window.innerWidth <= 600) {
        return (
            <div className='assignments__mobile'>
                <div className='assignments__mobile__container'>
                    {mobile.map(({heading, images}, index) => (
                        <div className='assignments__mobile__cards' key={heading}>
                            {index === 0 ? <h3 style={{marginTop: 0}}>{heading}</h3> : <h3>{heading}</h3>}
                            <div className='assignments__mobile__cardsFlex'>
                                {images.map(i => <AssignmentCards key={i.text} image={i.img} label={i.text} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        if (window.innerHeight < 700) {
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
        } else if(window.innerHeight >= 700 && window.innerHeight < 900) {
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
}

export default Assignments
