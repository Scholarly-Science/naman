import React, { useState } from 'react';
import './inputSearch.css';

function InputSearch({ setCompanyName, setCompanyImg }) {
    const [input, setInput] = useState('');
    const [blur, setBlur] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
        const value = e.target.value;
        const suggetionsArr = top100Films.filter(film => film.title.toLowerCase().startsWith(value.toLowerCase()));
        setSuggestions(suggetionsArr);
        if(value === '') {
            setSuggestions([]);
        }
        
        // Used to check if input has an image
        const tf = top100Films.filter(film => film.title.toLowerCase() === value.toLowerCase());
        if(tf.length > 0) {
            setCompanyName(tf[0].title);
            setCompanyImg(tf[0].img);
        } else {
            setCompanyName(value);
            setCompanyImg(null);
        }
    }

    const handleClick = (title, img) => {
        setInput(title);
        setCompanyName(title);
        setCompanyImg(img);
        setBlur(true);
    }

    return (
        <div className='inputSearch'>
            <input 
                type='text' 
                onChange={handleInput} 
                onFocus={() => setBlur(false)}                 
                value={input} 
                placeholder='Example: Google, Facebook...' 
            />
            { suggestions.length > 0 && !blur &&
                <ul>
                    {suggestions?.map(films => (
                        <li onClick={() => handleClick(films.title, films.img)}> 
                            <img src={films.img} alt='imggg' style={{width: '40px'}} />
                            {films.title} 
                        </li>
                        ))}
                </ul>
            }
        </div>
    )
}

export const top100Films = [
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
