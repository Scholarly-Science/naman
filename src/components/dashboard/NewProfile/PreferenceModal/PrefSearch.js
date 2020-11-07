import React, { useState } from 'react'
import '../ExperienceModal/inputSearch.css';

// Remove after rendering from backend
import { top100Films } from '../ExperienceModal/InputSearch';

function PrefSearch({ placeholder }) {
    const [input, setInput] = useState('');
    const [blur, setBlur] = useState(false);

    const handleClick = (input) => {
        top100Films.title = input;
        console.log('clicked');
    }

    console.log(input);

    return (
        <div className='prefSearch'>
            <input 
                type='text' 
                onChange={(e) => setInput(e.target.value)} 
                onFocus={() => setBlur(false)} 
                onBlur={() => setTimeout(() => setBlur(true), 200)}
                value={input} 
                placeholder={placeholder} 
            />
            {input && !blur && <div><span onClick={() => handleClick(input)}>{input}</span></div>}
        </div>
    )
}

export default PrefSearch
