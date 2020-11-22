import React, { useEffect, useState } from 'react';
import './NewDashboard.css';
import { months } from '../NewProfile/NewProfileData';

function NewDashboard() {
    const [dMonths, setDMonths] = useState([]);
    const [dates, setDates] = useState(datesArray1);

    useEffect(() => {
        setDMonths(months);
    }, [])

    const updateDate = (index) => {
        console.log(index)
    }

    const dateSelected = (date) => {
        let selected = document.getElementById(date);

        if (selected.classList.contains("selected")) {
            selected.classList.remove('selected');
        } else {
            selected.classList.add('selected');
        }
    }

    const handleDot = (dot) => {
        console.log(dot);
        if(dot === 1) {
            document.getElementById(`dot-1`).classList.add('clicked__dot');
            document.getElementById(`dot-2`).classList.remove('clicked__dot');        
        } else {
            document.getElementById(`dot-2`).classList.add('clicked__dot');
            document.getElementById(`dot-1`).classList.remove('clicked__dot');
        }
    }

    const dates1 = (dot) => {
        setDates(datesArray1);
        handleDot(dot);
    }

    const dates2 = (dot) => {
        setDates(datesArray2);
        handleDot(dot);
    }


    return (
        <div className='newDashboard'>
            <div className='newDashboard__container'>
                <section className='newDashboard__interview'>
                    <div className='newDashboard__interview__info'>
                        <h2>Schedule your</h2>
                        <h2>Interview Today</h2>
                    </div>
                    <div className='newDashboard__interview__months'>
                        {dMonths?.map((m, index) => <p key={m} onClick={() => updateDate(index)}>{m}</p>)}
                    </div>
                    <div className='newDashboard__interview__dates'>
                        {dates?.map(d => (
                            <div id={d.date} key={d.date} onClick={() => dateSelected(d.date)}>
                                <span>{d.day}</span>
                                <p>{d.date}</p>
                            </div>
                        ))}
                    </div>
                    <div className='newDashboard__interview__dots'>
                        <div id='dot-1' onClick={() => dates1(1)} className='clicked__dot'></div>
                        <div id='dot-2' onClick={() => dates2(2)}></div>
                    </div>
                    <div className='newDashboard__interview__time'>
                        <div>
                            <input type='number' />
                            :
                            <input type='number' />
                        </div>
                        <select>
                            <option>AM</option>
                            <option>PM</option>
                        </select>
                    </div>
                </section>
            </div>
        </div>
    )
}

const datesArray1 = [
    {day: 'Mon', date: 17},
    {day: 'Tue', date: 18},
    {day: 'Wed', date: 19},
    {day: 'Thu', date: 20},
    {day: 'Fri', date: 21},
    {day: 'Sat', date: 22},
    {day: 'Sun', date: 23},
]

const datesArray2 = [
    {day: 'Sun', date: 24},
    {day: 'Mon', date: 25},
    {day: 'Tue', date: 26},
    {day: 'Wed', date: 27},
    {day: 'Thu', date: 28},
    {day: 'Fri', date: 29},
    {day: 'Sat', date: 30},
]

export default NewDashboard;
