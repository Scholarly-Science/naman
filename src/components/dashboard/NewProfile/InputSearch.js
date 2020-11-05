import React from 'react';
import './inputSearch.css';
import Autocomplete from '@material-ui/lab/Autocomplete';

function InputSearch({ setCompanyName, setCompanyImg }) {
    return (
        <div>
        <Autocomplete
            className='inputSearch__autocomplete'
            freeSolo
            disableClearable
            options={top100Films}
            getOptionLabel={(option) => option.title}
            onChange={(event, value) => setCompanyImg(value.img)}
            renderOption={option  => (
              <React.Fragment>
                <img src={option.img} style={{width: '45px', marginRight: '10px', objectFit: 'contain'}} alt='img' />
                {option.title}
              </React.Fragment>
            )}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <input 
                        value={params.inputProps.value} 
                        placeholder='Example: Google or Code 2040'
                        onChange={setCompanyName(params.inputProps.value)} 
                        type="text" {...params.inputProps} 
                    />
                </div>
            )}
        />
        </div>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'The Godfather', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'The Godfather: Part II', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'The Dark Knight', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: '12 Angry Men', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: "Schindler's List", img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'Pulp Fiction', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'The Lord of the Rings: The Return of the King', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'The Good, the Bad and the Ugly', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'Fight Club', img: 'https://yt3.ggpht.com/a/AATXAJxHHP_h8bUovc1qC4c07sVXxVbp3gwDEg-iq8gbFQ=s900-c-k-c0x00ffffff-no-rj' }
]

export default InputSearch
