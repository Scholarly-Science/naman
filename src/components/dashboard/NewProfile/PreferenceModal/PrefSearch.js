import React from 'react'
import '../ExperienceModal/inputSearch.css';

import Autocomplete from '@material-ui/lab/Autocomplete';
// Remove after rendering from backend
import { top100Films } from '../ExperienceModal/InputSearch';

function PrefSearch({ placeholder }) {
    return (
        <div className='prefSearch'>
            <Autocomplete
            className='prefSearch__autocomplete'
            freeSolo
            disableClearable
            options={top100Films.map((option) => option.title)}
            onInputChange={(event, value) => console.log(value)}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <input 
                        value={params.inputProps.value} 
                        placeholder={placeholder}
                        type="text" {...params.inputProps} 
                    />
                </div>
            )}
            />
        </div>
    )
}

export default PrefSearch
