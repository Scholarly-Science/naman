import React, { useState } from 'react';
import './inputSearch.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function InputSearch() {
    const [textfield, setTextfield] = useState('');

    console.log(textfield);

    return (
        <div>
        <Autocomplete
            className='inputSearch__autocomplete'
            freeSolo
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
            <div>
                <TextField
                    className='inputSearch__textfield'
                    {...params}
                    placeholder='Example: Google or Code 2040'
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                    value={textfield}
                    onChange={(e) => setTextfield(e.target.value)}
                />
            </div>
            )}
        />
        </div>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 }
]

export default InputSearch
