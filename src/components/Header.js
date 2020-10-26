import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setSearchText(inputValue);
    }

    return <header>
        <div>
            <div><Link to='/home'>Home</Link></div>
            <div><Link to='/following'>Following</Link></div>
            <div>
                <input onChange={handleChange} value={searchText} />
                <button>Search</button>
            </div>
        </div>
    </header>
}

export default Header;